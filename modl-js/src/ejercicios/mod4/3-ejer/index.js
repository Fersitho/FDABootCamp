console.clear();

class Movie {
  title;
  director;
  actors;
  rating;
  
  #privProp = 10;
  
  static ratingThresold = 8;
  
  constructor(title, director, actors, rating, year) {
    this.title = title;
    this.director = director;
    this.actors = actors;
    this.rating = rating;
  }
  
  isHighRated() {
    return this.rating > Movie.ratingThresold;
  }
  
  isClassic() {
    return `${this.title} is ${!this.#isOlder() ? '' : 'not '}a classic`;
  }
  
  #isOlder() {
    return this.year < 1980;
  }
  
}

class Blockbuster extends Movie {
  recaudacion;
}

const forrestGump = new Movie("Forrest Gump", "John Doe", "Tom Hanks", 8.5, 1994);
const casablanca = new Movie("Casablanca", "Michael Curtiz","Humphrey Bogart, Ingrid Bergman", 8.2, 1942);

const barbie = new Blockbuster("Barbie", "Greta Gerwig", "Margot Robbie, Ryan Gosling", 7.4, 2023);

console.log(casablanca.isClassic());