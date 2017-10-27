---
layout:     post
titleSEO:	"Zasady projektowania obiektowego SOLID DRY KISS"
title:      "Notatnik Juniora 1#"
subtitle:   "Zasady projektowania obiektowego"
date:       2017-08-10 12:00:00
author:     "Codeboy"
category:   Notatnik-Juniora
tags:	    Notatnik-Juniora Dobre-praktyki
comments:   true
toc:        true
---

# Ogólne

## DRY - Don’t Repeat Yourself
- Jedna z podstawowych zasad programowania - **nie powtarzaj się**. Wielokrotne użycie tego samego kodu to podstawa programowania. Nie ma miejsca na kopiuj/wklej.
- Jeśli jesteś blisko powtórzenia (np. chcesz zastosować kopiuj/wklej, seria ifów lub w kodzie występują podobne zachowania) pomyśl nad stworzeniem abstrakcji (pętla, wspólny interfejs, funkcja, klasa, jakiś wzorzec projektowy np. Strategia itp.), którą będziesz mógł wielokrotnie wykorzystać.

<p class="advantages">Plusy</p>

- Lepsza czytelność kodu oraz łatwość w utrzymaniu.
- Zmiana implementacji tylko w jednym miejscu.

## KISS - Keep it simple, stupid!
- Prostota (i unikanie złożoności) powinna być priorytetem podczas programowania. Kod powinien byc ławy do odczytania i zrozumienia wymagając do tego jak najmniej wysiłku.
- Większość systemów działa najlepiej, gdy polegają na prostocie, a nie na złożoności.

<p class="advantages">Plusy</p>
- Szybciej i łatwiej zrozumieć mniej złożony system.
- Mniejsza ilość bugów, łatwość w utrzymaniu i modyfikowaniu kodu.

## Code for the Maintainer
- Czyli, programuj tak jakbyś to robił dla osoby, która będzie później utrzymywać ten kod. Rób to tak jakby to był brutalny psychopata, który wie gdzie mieszkasz.
- Dlaczego? Utrzymywanie kodu to (przeważnie) najbardziej wymagająca i większa część pracy programistów. Nie powinniśmy utrudniać sobie tego zadania.
- Zadbaj o to, aby nie trzeba było się zbytnio głowić nad kawałkiem Twojego kodu. Staraj się robić to tak, żeby nawet Junior mógł z przyjemnością przysiąść do lektury twojego kodu.
- Zawsze pozostaw po sobie kod czystszy niż go zastałeś.

## SOLID

### S - Single responsibility principle
- Klasa powinna być odpowiedzialna za pojedynczy obszar. Nie powinno być więcej powodów niż jeden, aby klasa się zmieniła.
- Odpowiedzialność może być zdefiniowana jako powód do zmiany, zatem klasa powinna mieć tylko jeden taki powód, a więc jedną odpowiedzialność.
- Klasa realizuję pojedyncze zadanie.

### O - Open/closed principle
- Powinieneś być w stanie rozszerzać swoje klasy bez jej modyfikacji.
- Klasy powinny być otwarte na rozszerzanie, a zamknięte na modyfikację.
- Polegaj na abstrakcji i polimorfizmie

### L - Liskov substitution principle
- Klasy w programie powinny być podmienialne przez swoje podklasy bez naruszania poprawności programu, czyli klasa dziedzicząca musi być dobrym odpowiednikiem klasy bazowej.

### I - Interface segregation principle
- “Wiele mniejszych, konkretnych interfejsów jest lepsze od pojedynczego ogólnego interfejsu. Powinno się projektować małe i zwarte interfejsy.

### D - Dependency inversion principle
- Niskopoziomowe klasy powinny zależeć od wysoko poziomowych, a oba od swoich abstrakcji. Powinniśmy dbać o poziomy abstrakcji i zależności.

<hr>

## LoD - Law of Demeter
- Nie rozmawiaj z obcymi. Rozmawiaj tylko z przyjaciółmi.
- Co to znaczy? Metoda obiektu powinna wywoływać metody tylko od:
  - Swojego obiektu.
  - Argumentu przekazanego do metody.
  - Obiektu stworzonego wewnątrz tej metody.
  - Bezpośredniego pola obiektu.
  - Np. nie powinno się stosować wywołań typu A.getB().getC().getD.getName().
- Dlaczego? Zmniejsza to powiązania między modułami oraz ilość ujawnianych detali.

## SLAP - Single Level of Abstraction Principle
- Zasada ta mówi, że każda linia kodu w metodzie powinna mieć ten sam poziom abstrakcji, czyli aby unikać mieszania ze sobą wysoko- i niskopoziomowych detali.
- Wpływa to na czytelność i łatwiejsze utrzymanie kodu.

## Composition Over Inheritance
- Kompozycja ponad dziedziczenie, czyli preferuj relacje B "zawiera/używa A" zamiast "jest A".
- Zmniejsza to zależności między klasami. Używając dziedziczenia łatwiej też o złamanie [Liskov substitution principle](#l---liskov-substitution-principle)
- W większości wypadów możemy całkowicie zrezygnować z dziedziczenia w naszej aplikacji (Oczywiście chodzi o dziedziczenie z **klas**, nie z interfejsów). Jest to zalecany sposób projektowania aplikacji.
- Stosuj dziedziczenie tylko gdy [LSP](#l---liskov-substitution-principle) nie jest złamana i naprawdę tego potrzebujesz.

## Encapsulate What Changes
- Miejsca, które są najbardziej prawdopodobne do zmiany powinny być schowane (zhermetyzowane) pod API.

<p class="advantages">Plusy</p>

- Minimalizuje wymagane modyfikacje, gdy musimy wprowadzić zmianę


<hr>

# Projektowanie pakietów

## CPP - Common Closure Principle
- Klasy zmieniające się razem powinny być pakietowane razem
- Izolacja zmian do zakresu pakietu
- Ściśle powiązana z OCP na poziomie klas
- Oznacza to tyle, że klasy, które zmieniają się wspólnie po zmianie wymagań, powinny być umieszczane w tym samym pakiecie. Zasada minimalizuje liczbę pakietów do zmiany w przypadku zmiany wymagań.

## REP - Reuse-release equivalence principle
- Reużywalność pakietu jest ściśle związana z jego cyklem wytwórczym

## CRP - Common-reuse principle
- Klasy wspólnie używane powinny być wspólnie pakietowane

<hr>

# Zależności miedzy pakietami / klasami

## Minimise Coupling
- Minimalizuj powiązania między pakietami/klasami. Mniejsza ilość zależności jest lepsza.
- Dlaczego? Zmniejsza to szansę na to, że zmiana kodu w zależności A nie popsuje kawałka kodu B.
- Można to zrobić przez ukrywanie szczegółów implementacji czy stosowanie [Law of Demeter](#LoD---Law-of-Demeter)

## ADP - Acyclic dependencies principle
- Zasada ta mówi, że w strukturze zależności nie powinno być zapętleń/cykli.
- Przykładowa struktura łamiąca tą zasadę będzie gdy: pakiet A ma zależność w pakiecie B, który ma zależność w pakiecie C, który z kolei ma zależność w pakiecie A.<br>
<pre class="text-diagram">
A &larr;-------- C
|           &uarr;
'---&rarr; B ----<sup>|</sup>
</pre>
- Możemy temu zapobiec stosując [Dependency inversion principle](#D---Dependency-inversion-principle), wzorce projektowe np. Observer lub stworzyć nowy pakiet i wrzucić tam wszystkie wspólne zależności.

## SDP - Stable-dependencies principle
- Pakiet, który jest zmienny nie powinien zależeć od pakietu, który jest trudny do zmiany.
- Zależności tego pakietu powinny być bardziej stabilne niż on sam.
- Taką samą zasadę możemy stosować w przypadku klas.

## SAP - Stable-abstractions principle
- Stabilny pakiet (trudny do zmiany) powinien być maksymalnie abstrakcyjny (czyli np. w większości operować na interfejsach), aby jego stabilność nie uniemożliwiała jego rozszerzania.
- Niestabilny pakiet (łatwy do zmiany) powinien byc maksymalnie konkretny (czyli w większości operować na implementacjach) jako że jego niestabilność pozwala w łatwy sposób zmienić jego konkretną implementację.
