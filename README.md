# ASP Course Hub

Statyczny prototyp materiałów do zajęć dr Karoliny Dudek, WW ASP w Warszawie, 2026/27. HTML, CSS i JavaScript bez frameworków, zewnętrznych bibliotek, fontów i procesu budowania.

## Uruchomienie

Otwórz `index.html` w przeglądarce albo uruchom serwer statyczny w katalogu repozytorium (`python3 -m http.server 8000`) i otwórz `http://localhost:8000`.

## GitHub Pages

W repozytorium wybierz **Settings → Pages → Build and deployment → Deploy from a branch**, gałąź **main**, folder **/(root)** i zapisz. Po zakończeniu publikacji adres: https://karolinajdudek.github.io/coursehub/. Wszystkie lokalne ścieżki są względne i obsługują podkatalog `/coursehub/`. Plik `.nojekyll` wyłącza przetwarzanie Jekyll. Nie jest potrzebny workflow ani instalacja zależności.

## Struktura

- `index.html` — homepage z dwoma wejściami do kursów.
- `kursy/zarzadzanie-designem.html` — wprowadzenie, trzy przykładowe zajęcia, zaliczenie.
- `kursy/warsztaty-badawczo-projektowe.html` — strona kursu w przygotowaniu.
- `assets/css/style.css` — paleta, wspólne komponenty, responsywność i druk.
- `assets/js/main.js` — mobilne menu i aktywna sekcja podczas przewijania.

## Edycja kursu

Treść jest zapisana w HTML i dostępna także bez JavaScriptu. Powiel sekcję `course-section`, nadaj jej unikalne `id` i dodaj odnośnik do `course-nav`. Zachowaj tę samą kolejność sekcji i odnośników. Skrypt sam obsłuży nowe sekcje.

Każde zajęcia mają komponenty oznaczone `data-component`: `intro`, `slides`, `exercise`, `takeaway`, `resources`, `task`, `note`. Opcjonalny komponent można usunąć. Materiały w `resources` mają typy `pdf`, `video`, `podcast`, `link`. Rozwijana lista działa bez JavaScriptu.

### Materiały Google Drive i multimedia

Prototyp nie zawiera rzeczywistych plików dydaktycznych ani fikcyjnych aktywnych odnośników. Po przygotowaniu prezentacji zastąp status „W przygotowaniu” odnośnikiem np. `<a href="WŁAŚCIWY_ADRES">Otwórz prezentację ↗</a>`. Podobnie zastąp nazwę materiału na liście linkiem do pliku PDF na Drive, filmu YouTube, podcastu lub strony. Używaj opisowych etykiet. Jeżeli wybierasz otwieranie w nowej karcie, dodaj `target="_blank" rel="noopener noreferrer"` i informację „nowa karta”. Sprawdź uprawnienia dostępu do każdego pliku w oknie prywatnym przed udostępnieniem kursu.

Przykładowe tematy, ćwiczenia i zaliczenie wymagają zatwierdzenia prowadzącej. Terminy i kryteria nie zostały wymyślone. Drugi kurs ma własny kolor i stronę informacyjną, bez przykładowego programu.

## System wizualny i dostępność

WW green `#00FF97`, ink `#111111`, off-white `#F7F7F3`, white `#FFFFFF`, line `#DCDCD6`; Zarządzanie designem `#304BFF`, Warsztaty `#FF3D81`. Różowe pola mają ciemny tekst. Typograficzny znak „ww ↗” jest elementem roboczym prototypu, nie oficjalnym logo ASP.

Nawigacja klawiaturą, link pomijający nagłówek, widoczny fokus, `aria-current`, `aria-expanded`, zamykanie menu Escape, respektowanie preferencji ograniczonego ruchu. Na telefonie menu jest rozwijane; bez JS spis pozostaje widoczny. Bez przechowywania danych, analityki i cookies.

## Weryfikacja prototypu

Sprawdzono składnię JavaScriptu, istnienie lokalnych ścieżek, poprawność kotwic, unikalność identyfikatorów i obecność siedmiu komponentów w każdych z trzech zajęć. Test wizualny i interakcyjny w przeglądarce pozostaje do wykonania: środowisko wykonawcze blokowało uruchomienie przeglądarki testowej, a przeglądarka aplikacji blokowała adresy lokalnych plików. Przed udostępnieniem osobom uczestniczącym sprawdź widoki 320, 375, 768 i 1440 px oraz menu, przewijanie i rozwijane materiały.
