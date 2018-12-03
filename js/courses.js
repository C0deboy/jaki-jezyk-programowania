require('../css/courses.css');

const courses = $('.courses');
const q = encodeURIComponent(courses.attr('data-query'));
const t = 'ZUt4dk1EZG1wOEt6Y3g5OTJzVkNwQTFjM2NneTJPeDBlZklybnZYSDphaVozeUJBMlpIaXMyanNBMXp6MEFFTEo5OUhmOHh4T1lpZWtCSmtkYTZ3YUJrUlBxektEOGRZMXFIS01MRUdCZm1OcHZNcHh6c3pIUEc5SDdCMjg4UUJMb1JxTlhXOW55a1VlQVVORUJJYkRETkFhTnBRcDRxeHdNUmFPYmVSRg==';

collect('pl');
collect('en');

function collect(lang) {
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/courses?search=${q}&category=Development&language=${lang}&ordering=relevance&ratings=4&page_size=8&fields[course]=@default,headline,content_info,num_subscribers,instructional_level,avg_rating,num_reviews,discount_price,last_update_date,created`,
    headers: {
      Authorization: 'Basic ' + t,
    },
    success: (data) => {
      data.results.sort(((a, b) => b.num_reviews - a.num_reviews));
      data.results.slice(0, 4).forEach((course) => {
        addCourse(course, lang);
      });
      courses.find('.loading').remove();
    },
    error: (error) => {
      courses.css('display', 'none');
      $('.courses-link').css('display', 'none');
      console.log(error);
    },
  });
}

function addCourse(course, lang) {
  const rating = Math.round(course.avg_rating * 100) / 100;
  let stars = '<div class="stars">';

  let i;
  for (i = rating; i > 1; i--) {
    stars += '<div><i class="fa fa-star"></i><i class="fa fa-star filled"></i></div>';
  }
  stars += `<div><i class="fa fa-star"></i><i class="fa fa-star filled not-full" style="width: ${i * 17.66}px"></i></div></div>`;

  const link = `https://click.linksynergy.com/deeplink?id=0Bz3A2CPbI4&mid=39197&murl=https%3A%2F%2Fwww.udemy.com${encodeURIComponent(course.url)}`;
  const discount = course.discount_price != null ? `<span class="course-discount">${course.discount_price.price_string}</span>` : '';
  const strikethrough = discount !== '' ? 'discount' : '';

  courses.append(`
          <a class="course" href="${link}" target="_blank">
            <img class="course-lang" src='/img/${lang}.png' alt="course language"/>
            <img src="${course.image_240x135}" alt="course cover"/>
            <div class="course-header">
              <p class="course-title">${course.title}</p>
              <p class="course-headline">${course.headline}</p>
              <span><i class="fa fa-clock-o"></i> Czas trwania: ${course.content_info}</span>
              <span><i class="fa fa-user"></i> ${course.num_subscribers} zapisanych uczestników</span><br>
              <span><i class="fa fa-graduation-cap"></i> ${course.instructional_level}</span>
              <span><i class="fa fa-calendar-check-o" data-created="${course.created}"></i> Ostatnia aktualizacja: ${course.last_update_date}</span>
            </div>
            <div class="details">
              ${discount}
              <span class="course-price ${strikethrough}">${course.price}</span>
              <span class="course-rating">${stars} ${rating} / 5</span>
              <span class="course-reviews">Ocen: ${course.num_reviews}</span>
            </div>
          </a>
          <hr>
        `);
}
