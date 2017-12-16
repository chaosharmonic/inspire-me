var fill = [
  // keys
  ["in ", ["A", "B", "C", "D", "E", "F", "G", "A#", "C#", "D#", "F#", "G#", "Ab", "Bb", "Db", "Eb", "Gb"],
  ["major", "dorian", "minor", "mixolydian", "lydian", "locrian", "phrygian"]],
  // instruments and effects
  ["using ", ["a 7-string guitar", "a vocoder", "a violin", "effects pedals on the vocal track", "a violin", "a saxophone", "a cello"]],
  // time signatures
  ["in ", ["3/4", "4/4", "5/4", "6/8", "7/8", "9/8", "free time"]],
  // chord types, non-chord tones, and misc theory
  ["using ", ["a pedal point", "a Phrygian cadence", "a full-diminished 7th chord", "suspensions", "a 9th chord", "a 13th chord", "an augmented chord", "a Neapolitan chord", "a tone cluster", "escape tones", "a dorian scale", "a melodic minor scale", "a mixolydian scale", "a lydian scale", "a locrian scale", "a phrygian scale", "a whole-tone scale", "a blues scale", "a whole-tone scale"]],
  // misc constraints
  ["using ", ["fewer than 50 unique words", "no rhymes", "no root-position chords", "no V chords", "a non-circular chord progression", "lyrics from another song (but your own music)", "music from another song (but your own lyrics)", "a second language", "a non-resolving chorus", "spoken word"]],
  // lyrical topics
  ["about ", ["dragons", "loss", "fighting", "drugs", "dreams", "the future", "plans gone wrong", "aromantic love", "itself", "a genre"]],
];

var modifier = document.querySelector("#modifier");
var detail = document.querySelector("#detail");
var reload = document.querySelector("#reload");

function prompt() {
  var r1 = Math.floor(Math.random() * fill.length);
  console.log(r1);
  var r2 = Math.floor(Math.random() * fill[r1][1].length);
    modifier.textContent = fill[r1][0];

  if (r1 == 0) {
    var r3 = Math.floor(Math.random () * fill[r1][2].length);
    detail.textContent = fill[r1][1][r2] + " " + fill[r1][2][r3];
  }

  else {
    detail.textContent = fill[r1][1][r2];
  }
}

reload.addEventListener("click", function(){
  prompt();
})

prompt();
