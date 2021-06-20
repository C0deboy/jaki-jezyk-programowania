::     C, C++, Java, JavaScript, Python, Swift, R, Csharp, Ruby, PHP, Kotlin, Scala, Go, Groovy, Rust
:: java -DgithubIgnoreProjects="CS-Notes" -DgithubOnlyLangs="Java" -jar stats-scraper.jar --github
java -DgithubIgnoreProjects="CS-Notes" -jar stats-scraper.jar --github --tiobe --spectrum --stack --meetup --versions
if not errorlevel 1 python E:\Projects\jjp-analysis\generate-stats.py
pause
