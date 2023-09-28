export async function getTracklist() {
  const response = await fetch(
    'https://skypro-music-api.skyeng.tech/catalog/track/all/',
  )
  if (!response.ok) {
    throw new Error('Не удалось получить плейлист, попробуйте позже!')
  }

  const data = await response.json()
  return data
}



export async function getTrackById(id) {
  const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${id}`);
  
  if(!response.ok) {
      throw new Error("Ошибка при получении трека")
  }
    const track = await response.json();
    return track;
}