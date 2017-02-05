# Opslags bog til scriptcraft.

##Indhold:

[Scriptcraft Funktioner](#scriptcraft-funktioner )

  [echo](#echo)
  
  [Drone](#drone)
  
  [Minecraft Blocks](#minecraft-blocks)


##Introduktion
Denne side bliver opdateret løbende med de ting vi lærer. Hvis man vil læse foran kan man altid gå ind på scriptcrafthjemmeside!
Link til den engelske hjemmeside: https://scriptcraftjs.org/


Hust at når man skriver javascript kode i minecraft, så skal man skrive /js foran. Ex: 

`/js var placering = 10;`

Hvis man skriver kode i filer er dette ikke nødvendigt, her kan man nøjes med:

`var placering = 10;`


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

### Drone

Drone er et objekt i scriptcraft. Den bruges til at bygge ting i minecraft. Det mest simple metode til at bygge ting er **box**. Med box der laver man en kasse. Hvilket jo er praktisk når minecraft består af kasser. Den mest simple udgave af box kan se således ud:

```javascript
box(blocks.oak);
```
Dette laver en 'oak' block i stedet for den block spilleren pejer på. Hvis spilleren ikke peger på en block laver den en oak block to klodser foran ham.

Man kan også lave en kasse med en variabel størrelse. fx:

```javascript
var bredde = 10;
var hoejde = 3;
var dybde = 6;
box(blocks.oak, bredde, hoejde, dybde);
```
Dette laver en kasse af oak som er 10 bred, 3 høj og 6 dyb. Det kan være en rigtig god ide at prøve sig frem hvis man er i tvivl om hvad de forskellige ting betyder.

Der er selvfølgelig muligt at lave ting af mange forskellige blocks. Det er to måder at gøre det på.  Den første måde er at bruge blocks objektet. Vi har allerede set blocks.oak. Men der findes tilsvarende navne på alle de andre blocks. fx blocks.air.

Den anden måde er at skrive tal værdien for blocken man skal bruge. Man skriver her i stedet talværdien for blokken. For oak er det fx: 

```javascript
box('5', bredde, hoejde, dybde);
```
Nogle blocks findes der flere forskellige udgaver af. Fx findes der mange forskellige typer af planker. Vi har set oak allerede. Men der findes tre andre slags træer. I denne situation skriver man et tal bagved ':'. Vi kan tage blocks.birch. Den kan laved ved: 

```javascript
box('5:2', bredde, hoejde, dybde);
```
Der findes en liste over alle blocks numre i afsnittet [Minecraft Blocks](#minecraft-blocks)


Drone kan rigtig mange ting, derfor anbefaler vi at man kigger på den engelske guide, så man kan se alle de forskellige funktioner! 
Link: https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md#drone-plugin

### Minecraft Blocks
Dette er en liste over minecraft blocks. Det bruges blandt andet af drone.

![Minecraft Data Values][img_dv]
[img_dv]: https://github.com/ArvidLangsoe/MineCraft-WorkShop-CP/blob/master/source/ypgpm_datavalues.png "All minecraft blocks."

