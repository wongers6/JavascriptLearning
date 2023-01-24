// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactor = (num, array_DNA) => {
    return {specimenNum: num,
    dna: array_DNA,
    mutate(){
      const dnaBases = ['A', 'T', 'C', 'G']
      const rand_pos = Math.floor(Math.random() * this.dna.length)
      let rand_base = this.dna[rand_pos]
      let new_rand_base = dnaBases[Math.floor(Math.random() * 4)]
      while (rand_base === new_rand_base){
        new_rand_base = dnaBases[Math.floor(Math.random() * 4)]
      }
      this.dna[rand_pos] = new_rand_base
      },
    compareDNA(pAequor){
      compare_dna = pAequor.dna
      let counter = 0
      for (i=0; i<=compare_dna.length; i++){
        if (compare_dna[i] === this.dna[i]){
          counter ++
        }
      return console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${Math.round(counter/15*100)}% DNA in common`)
      }
    },
    willLikelySurvive(){
      const check = this.dna.filter(ele => (ele === 'C'||ele === 'G'))
      return (check.length >= 0.6) ? true : false;
      }
    }
  }

pAequor_Array = new Array
counter = 1
do {
  life = pAequorFactor(counter, mockUpStrand())
  if (life.willLikelySurvive === true){
    pAequor_Array.push(life)
    counter ++
  }} 
while(counter < 30)
