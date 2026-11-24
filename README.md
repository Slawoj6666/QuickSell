# QuickSell

Strona dająca użytkownikom tworzyć ogłoszenia z Zdjęciami obiektu, posiadająca wyszukiwarkę dla kupujących i mająca możliwość Rozmowy pomiędzy kupującym i sprzedającym.

## struktura Projektu
```text
QuickSell/
├── .gitignore                # Pliki i foldery ignorowane przez Git
├── README.md                 # Dokumentacja projektu
├── package.json              # Główne skrypty uruchamiające frontend i backend jednocześnie
├── client/                   # Frontend (React + Vite)
│   ├── public/               # Zasoby statyczne
│   ├── src/
│   │   ├── components/       # Komponenty wielokrotnego użytku
│   │   ├── pages/            # Widoki / podstrony aplikacji
│   │   ├── services/         # Komunikacja z API (fetch / axios)
│   │   ├── App.jsx           # Główny komponent aplikacji
│   │   └── main.jsx          # Punkt wejścia React
│   ├── index.html            # Szablon HTML
│   ├── package.json          # Zależności frontendu
│   └── vite.config.js        # Konfiguracja Vite (w tym proxy do API)
└── server/                   # Backend (Node.js + Express)
    ├── src/
    │   ├── controllers/      # Logika obsługi żądań
    │   ├── routes/           # Definicje ścieżek (endpointów) API
    │   ├── middleware/       # Funkcje pośredniczące (autoryzacja, obsługa błędów)
    │   └── index.js          # Punkt wejścia serwera
    ├── .env.example          # Przykładowa konfiguracja zmiennych środowiskowych
    └── package.json          # Zależności backendu
```
## instalacja i uruchumienie projektu lokalnie

1. sklonuj repozytorium
 ```bash
  git clone https://github.com/Slawoj6666/QuickSell.git
  cd QuickSell/
 ```
2. zainstaluj wszystkie potrzebne biblioteki
   ```
   npm run install:all
   ```
3. **skonfiguruj zmienne środkowe**
 serwer node bierze port na którym ma być uruchomiony z pliku.env, skopiuj plik i uzupełnij swoje dane.
   ```bash
   cp server/.env.example server/.env
   ```
4. uruchom aplikacje w trybie deweloperskim
   ```bash
   npm run dev
   ``` 
Po uruchomieniu aplikacja będzie dostępna pod adresami:
* **Frontend:** `http://localhost:5173`
* **Backend API:** `http://localhost:5000/api/health`

## użyte technologie
### frontend
do frontend-u użyty jest Vite dla możliwości szybkiego i prostego zobaczenia zmian w codzie frontend-u
### backend
do Backend-u jest użyte node-js dla, jego dobrej dokumentacji i niskiego progu znajomości 







## do zrobienia
### client

### server

- [ ] api
    - [ ] test









# Twórcy
Grupa 4
