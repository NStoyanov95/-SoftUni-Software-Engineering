function solve(band, album, song) {
    
    let duration = (album.length * band.length) * song.length / 2;

    let rotations = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);

}

solve('Black Sabbath', 'Paranoid',
'War Pigs')