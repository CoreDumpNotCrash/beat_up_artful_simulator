export default function playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
}