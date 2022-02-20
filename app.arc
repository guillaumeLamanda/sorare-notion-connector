@app
sorare-notion

@http
post /update-sorare-players

@scheduled
sorare-update cron(0 9-20 * * ? *)

@aws
timeout 30
profile personal
region eu-west-1
