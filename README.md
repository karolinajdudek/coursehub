# ASP Course Hub

Statyczny prototyp materiałów do zajęć dr Karoliny Dudek, WW ASP w Warszawie, 2026/27. HTML, CSS i JavaScript bez frameworków, zewnętrznych bibliotek, fontów i procesu budowania.

## Uruchomienie

Otwórz `index.html` w przeglądarce albo uruchom serwer statyczny w katalogu repozytorium (`python3 -m http.server 8000`) i otwórz `http://localhost:8000`.

## GitHub Pages

W repozytorium wybierz **Settings → Pages → Build and deployment → Deploy from a branch**, gałąź **main**, folder **/(root)** i zapisz. Po zakończeniu publikacji adres: https://karolinajdudek.github.io/coursehub/. Wszystkie lokalne ścieżki są względne i obsługują podkatalog `/coursehub/`. Plik `.nojekyll` wyłącza przetwarzanie Jekyll. Nie jest potrzebny workflow ani instalacja zależności.

## Struktura

- `index.html` — homepage z dwoma wejściami do kursów.
- `kursy/zarzadzanie-designem.html` — sylabus, 12 terminów zajęć, prezentacja wprowadzająca i zasady zaliczenia.
- `kursy/warsztaty-badawczo-projektowe.html` — strona kursu w przygotowaniu.
- `assets/css/style.css` — paleta, wspólne komponenty, responsywność i druk.
- `assets/js/main.js` — mobilne menu i aktywna sekcja podczas przewijania.

## Edycja kursu

Treść jest zapisana w HTML i dostępna także bez JavaScriptu. Powiel sekcję `course-section`, nadaj jej unikalne `id` i dodaj odnośnik do `course-nav`. Zachowaj tę samą kolejność sekcji i odnośników. Skrypt sam obsłuży nowe sekcje.

Każde zajęcia mają komponenty oznaczone `data-component`: `intro`, `slides`, `exercise`, `takeaway`, `resources`, `task`, `note`. Opcjonalny komponent można usunąć. Materiały w `resources` mają typy `pdf`, `video`, `podcast`, `link`. Rozwijana lista działa bez JavaScriptu.

### Materiały Google Drive i multimedia

Wprowadzenie zawiera podany przez prowadzącą link do Google Slides. Pozostałe zajęcia mają miejsca na materiały. Po przygotowaniu prezentacji zastąp status „W przygotowaniu” odnośnikiem np. `<a href="WŁAŚCIWY_ADRES">Otwórz prezentację ↗</a>`. Podobnie zastąp nazwę materiału na liście linkiem do pliku PDF na Drive, filmu YouTube, podcastu lub strony. Używaj opisowych etykiet. Jeżeli wybierasz otwieranie w nowej karcie, dodaj `target="_blank" rel="noopener noreferrer"` i informację „nowa karta”. Sprawdź uprawnienia dostępu do każdego pliku w oknie prywatnym przed udostępnieniem kursu.

Treść kursu Zarządzanie designem opiera się na opisie i harmonogramie przekazanym przez prowadzącą. Daty październik–grudzień dotyczą 2026 r., styczeń — 2027 r. Błędny zapis „2026-13-01” zinterpretowano jako 13.01.2027, zgodnie ze środą i rokiem akademickim 2026/27. Drugi kurs ma własny kolor i stronę informacyjną, bez przykładowego programu.

## System wizualny i dostępność

WW green `#00FF97`, ink `#111111`, off-white `#F7F7F3`, white `#FFFFFF`, line `#DCDCD6`; Zarządzanie designem `#304BFF`, Warsztaty `#FF3D81`. Różowe pola mają ciemny tekst. Typograficzny znak „ww ↗” jest elementem roboczym prototypu, nie oficjalnym logo ASP.

Nawigacja klawiaturą, link pomijający nagłówek, widoczny fokus, `aria-current`, `aria-expanded`, zamykanie menu Escape, respektowanie preferencji ograniczonego ruchu. Na telefonie menu jest rozwijane; bez JS spis pozostaje widoczny. Bez przechowywania danych, analityki i cookies.

## Weryfikacja prototypu

Sprawdzono składnię JavaScriptu, istnienie lokalnych ścieżek, poprawność kotwic, unikalność identyfikatorów i zgodność harmonogramu z 12 sekcjami zajęć i środowymi datami. Test wizualny i interakcyjny w przeglądarce pozostaje do wykonania: środowisko wykonawcze blokowało uruchomienie przeglądarki testowej, a przeglądarka aplikacji blokowała adresy lokalnych plików. Przed udostępnieniem osobom uczestniczącym sprawdź widoki 320, 375, 768 i 1440 px oraz menu, przewijanie i rozwijane materiały.

## Uzupełnianie kolejnych zajęć

Opcjonalne komponenty są w `templates/lesson-components.html`. Kopiuj tylko potrzebne bloki z wnętrza `template` do sekcji zajęć i zastąp teksty w nawiasach. Na stronie nie są wyświetlane puste ćwiczenia, zadania ani wymyślone materiały. Pierwsze spotkanie (07.10.2026) to sekcja Wprowadzenie; kolejne mają numery 02–12.
