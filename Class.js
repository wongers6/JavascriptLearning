class School {
    constructor(name, level, numberOfStudents){
      this._name = name
      this._level = level
      this._numberOfStudents = numberOfStudents
    }
  
    get name() {
      return this._name
    }
  
    get level() {
      return this._level
    }
  
    get numberOfStudents() {
      return this._numberOfStudents
    }
  
    set numberOfStudents(newNumberOfStudents){
      if (typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }
  
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
      }
  
    pickSubstituteTeacher(substituteTeachers){
      const rand_num = Math.floor(Math.random() * (substituteTeachers.length - 1))
      return substituteTeachers[rand_num]
    }
  
  }
  
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents)
      this._pickupPolicy = pickupPolicy
    }
      get pickupPolicy(){
        return this._pickupPolicy
      }
  }
  
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams
    }
      get sportsTeams(){
        return this._sportsTeams
      }
  }
  
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'tudents must be picked up by a parent, guardian, or a family member over the age of 13.')
  
  const teacher = lorraineHansbury.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','JR Smith','James Harden','T d','Manu BVinfli'])
  
  console.log(teacher)
  
  const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']) 
  