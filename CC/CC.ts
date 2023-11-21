function getVedioID(str: string = ''): string {

    var videoURL: string = str //"https://www.youtube.com/watch?v=IZ1GYnI9a5E&ab_channel=ShareAcademy";
    var regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;

    if(regex.exec(videoURL) != null) {
        return regex.exec(videoURL)![3];
    } else {
        return ""
    }
}