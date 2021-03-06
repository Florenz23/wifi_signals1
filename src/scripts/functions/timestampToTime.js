export default function timestampToTime(timestamp) {
    let date = new Date(timestamp *1000)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    let new_time = hour + (minutes/60*100) * 0.01
    new_time = Math.round(new_time*100) / 100
    return new_time
}
