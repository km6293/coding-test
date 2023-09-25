function solution(genres, plays) {
  const genreMap = {};
  
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];

    if (!genreMap[genre]) genreMap[genre] = { totalPlays: 0, songs: [] };

    genreMap[genre].totalPlays += play;
    genreMap[genre].songs.push({ index: i, plays: play });
  }

  const genreList = Object.values(genreMap);
  genreList.forEach((genre) => genre.songs.sort((a, b) => b.plays - a.plays || a.index - b.index) );
  genreList.sort((a, b) => b.totalPlays - a.totalPlays);

  const result = [];

  genreList.forEach((genre) => {
    genre.songs.slice(0, 2).forEach((song) => {
      result.push(song.index);
    });
  });

  return result;
}

// console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]))
console.log(solution(["classic", "pop", "classic", "classic", "pop"],[800, 600, 150, 800, 2500]))

// answer : [4, 1, 0, 3]