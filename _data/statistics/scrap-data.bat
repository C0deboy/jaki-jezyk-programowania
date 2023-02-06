java -DgithubIgnoreProjects="CS-Notes, JavaGuide, GitHub-Chinese-Top-Charts" -jar stats-scraper.jar --github --tiobe --stack --meetup --versions
if not errorlevel 1 python E:\Projects\jjp-analysis\generate-stats.py
pause
