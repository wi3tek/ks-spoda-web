import { DialogHelpInfo } from '../model/dialog-help-data';

export class HelpInfoTemplates {
  public static TEAM_STRUCTURE_HELP_TEMPLATE: DialogHelpInfo = {
    title: 'Struktura drużyn',
    template: `<p>Odnosi się do liczby zawodników w składzie meczowym</p>
    <b>1 NA 1</b>
      <p>
      Mecze rozgrywane są w składach jednoosobowych
      </p>
      <b>2 NA 2</b>
      <p>
      Mecze rozgrywane są w składach jednoosobowych
      </p>
      <b>2 NA 2</b>
      <p>
      Mecze rozgrywane są w składach mieszanych: <br/>
      1 na 1, 2 na 2, lub 2 na 1
      </p>`,
  };

  public static LEAGUE_TYPE_HELP_TEMPLATE: DialogHelpInfo = {
    title: 'Typ ligi',
    template: `<p>To sposób organizacji rozgrywek</p>
    <b>SEZON</b>
    <p>
      Mecze rozgrywane są w systemie sezonu ligowego. <br />
      W ramach kolejek każdy gra z każdym.
    </p>
    <b>PUCHAR</b>
    <p>
      Mecze rozgrywane są w systemie pucharowym. <br />
      Do wyboru system play-off lub faza grupowa
    </p>`,
  };

  public static PRIVATE_LEAGUE_HELP_TEMPLATE: DialogHelpInfo = {
    title: 'Widoczność ligi',
    template: `
    <b>Liga prywatna</b>
    <p>
      Tylko Ty i osoby, którym udostępnisz tę ligę będą mogli ją zobaczyć
    </p>
    <b>Liga publiczna</b>
    <p>
      Liga będzie widoczna dla wszystkich
    </p>`,
  };

  public static POINT_COUNTING_METHODS_HELP_TEMPLATE: DialogHelpInfo = {
    title: 'Sposób liczenia punktów',
    template: `<p>Decyduje o kolejności drużyn w tabeli sezonu</p>
    <b>RANKING</b>
      <p>
      O pozycji w tabeli decyduje ranking podobny do tego, który występuje w szachach. 
      </br> 
      Każdy zawodnik rozpoczyna z rankingiem startowym = 1000
      </p>
      <b>PUNKTY</b>
      <p>
      O pozycji w tabeli decyduje liczba punktów liczona tradycyjnie </br> (Z - 3 pkt, R - 1pk, P - 0 pkt)
      </p>
      <b>PUNKTY / MECZ</b>
      <p>
      O pozycji w tabeli decyduje średnia punktów ze wszystkich rozegranych meczów w sezonie
      </p>`,
  };

  public static RATING_TYPE_HELP_TEMPLATE: DialogHelpInfo = {
    title: 'Typ rankingu',
    template: `<p>Oznacza sposób liczenia rankingu</p>
    <b>INDYWIDUALNY</b>
      <p>
       Dla każdego zawodnika w drużynie ranking przeliczany jest indywidualnie. 
       Oznacza to, że jeśli w jednej parze będą grać zawodnicy o dużej różnicy rankingu, 
       to przy zwycięstwie więcej punktów trafi na konto słabszego gracza. 
       Ponadto gracz o gorszym rankingu straci mniej punktów w przypadku porażki.
      </p>
      <b>DRUŻYNOWY</b>
      <p>
      Dla każdego zawodnika w drużynie ranking przeliczany jest drużynowo.
      Oznacza to, że podczas wspólnego meczu graczom z tej samej 
      drużyny ranking będzie wzrastał lub malał o tyle samo punktów, 
      niezależnie od różnicy w rankingach graczy z drużyny.
            </p>
      
    <br>
    <p><b>  Typ rankingu nie ma znaczenia, jeśli struktura drużyn w lidze to '1 v 1' </b>
     </p>`,
  };

  public static EURO_INFO: DialogHelpInfo = {
    title: 'EURO 2024',
    template: `
      <p>
       Po zaznaczeniu opcji Euro 2024 zmieni się logika wyznaczania meczów.
       </p>
       <p>
       W turnieju <b>Euro 2024</b> terminarz jest z góry ustalony, a dostępne drużyny 
       </p>
       <p>
       ograniczają się do oficjalnie zakwalifikowanych do turnieju.
       </p>
       <p>
       Co za tym idzie - nie obowiązuje limit jednej gry danym zespołem w jednej kolejce
       </p>

       `,
  };
}
