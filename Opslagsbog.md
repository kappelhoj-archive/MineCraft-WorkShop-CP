# Opslags bog til scriptcraft.
Link til den engelske hjemmeside: https://scriptcraftjs.org/

Hust at når man skriver javascript kode i minecraft, så skal man skrive /js foran. Ex: 

`/js var placering = 10;`

Hvis man skriver kode i filer er dette ikke nødvendigt, her kan man nøjes med:

`var placering = 10;`

## Minecraft ting.

## Javascript
### Variable
En variabel er et navn på noget man har gemt i computerens hukommelse. Man kan forestille sig det lidt som en kasse hvor man har skrevet et navn på, og så kan man ligge ting ned i kassen. 

I javascript kan man oprette variable ved at skrive 'var'. Man skriver fx:

`var spillerNavn;`

Nu har vi oprettet en variabel der hedder spillerNavn. Vi kan nu sætte spiller navn til at være lig et navn. Dette kan vi gøre således:

`spillerNavn = 'Anders And';`

Nu har vi sat spillerNavn til at være lig 'Anders And'. Hver gang vi bruger spillerNavn fra nu af så vil den være ligmed 'Anders And'. Vi kunne fx bruge **echo** funktionen i scriptcraft til at vise navnet.

`echo(spillerNavn);`

Dette vil printe 'Anders And' ud på skærmen.
Man kan altid ændre en variabel igen, vi kan fx ændre spillerNavn til 'Mickey Mouse'. Så har vi ændret indeholdet i variablen, så den nu indeholder 'Mickey Mouse'.

`spillerNavn = 'Mickey Mouse';`

Man kan også sætte en variabel i samme linje som man laver den, her er et eksempel:

`var spiller2Navn = 'Fedtmule'`

## Scriptcraft Funktioner 
### echo
**echo** er en funktion i scriptcraft der printer ting på skærmen i minecraft. **echo** har to input. Hvem den skal skrive beskeden til og hvad den skal skrive. 

```javascript
echo(self, 'Denne besked printes på skærmen.');
```
Her er self den spiller som kalder funktionen echo.

### drone

Drone er et objekt i scriptcraft. Den bruges til at bygge ting i minecraft. 



Drone kan rigtig mange ting, derfor anbefaler vi at man kigger på den engelske guide, så man kan se alle de forskellgie funktioner! 
Link: https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-plugin




