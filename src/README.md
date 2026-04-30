    **MOMOBunk House**

**Hva det er som ble utviklet?**

Mini online butikk (MOMO BunkHouse)

**Innholder:**

en side som viser produkter

en system for å legge til produkter i vogn

a vogn/kurv side hvor du ser hva du har lagt til

knapper som oppdaterer alt umiddelbart

En mini versjon av en online nettbutikk.

**Teknologi brukt**

React brukt til å utvikle nettsidens UI

* Navbar
* productCard
* Cart page/side

isteden for å skrive en stor HTML fil, delte opp alt i små komponenter.

**JavaSkript (logikk)**

Den kontrollerer:

legge produkter i kurven

fjerne produkter

telle antall ting

lagre data

**Zustand (State management)**

Det her er lagrings system

Den lagrer:

Kurv varer

antall mengde varer

Hvor det er viktig:

Uten det vil siden ikke kunne huske hva som ble lagt til.

**React Router**

Det tillater følgende mellom sider

* / -----> Home (produkter)
* `/`cart ---> Cart page
  '
  Ingen reload vil skje som gjør at det føles som en ekte app.

API (Falsk Store API)

jeg brukte: https://fakestoreapi.com/products

Det ga oss ekte produkt data

* bilder
* priser
* titler

Siden er ikke statisk men henter inn ekte data

useEffect + useState (React Hooks)

UseState

lagrer data inne på komponent

* produkt liste
* knapp state (Added eller ikke)

UseEffect

kjører kode når siden laster

* Henter produkter fra API
* Den reagerer til endringer
* Navbar viser antall varer (nummer) i vognen

Prosjektet var bygget til å praktisere:

API intergrasjon

State Management

Routing i React
