import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
import {useNavigate } from "react-router-dom";
// Sample sidebar items data
const sidebarItems = [
  { title: "Racing Sports", subItems: ["Horse Racing", "Greyhound Racing"] },
  {
    title: "Others",
    subItems: [
      "Our Casino",
      "Our Virtual",
      "Live Casino",
      "Slot Game",
      "Fantasy Game",
    ],
  },
  {
    title: "All Sports",
    subItems: [
    
      {
        title: "Cricket",
        subItems: [
            'All Match',
          {
            title: "T5 XI",
            subItems: ["SNP XI v BT XI"],
          },
          {
            title: "T10 XI",
            subItems: ["Delhi Capitals XI v Chennai Super Kings XI"],
          },
          {
            title: "Twenty20 Big Bash",
            subItems: [
              "Melbourne Renegades v Hobart Hurricanes",
              "Melbourne Stars v Brisbane Heat",
            ],
          },
          {
            title: "Pakistan Champions T20 Cup",
            subItems: ["Dolphins v Markhors"],
          },
          {
            title: "Virtual Cricket League",
            subItems: [
              "England T10 v Australia T10",
              "India T10 v Australia T10",
              "Pakistan T10 v Bangladesh T10",
              "Rajasthan Royals T10 v Delhi Capitals T10",
            ],
          },
          {
            title: "Nepal Premier League",
            subItems: [
              "Chitwan Rhinos v Karnali Yaks",
              "Sudurpaschim Royals v Janakpur Bolts",
            ],
          },
          { title: "One Day Internationals", subItems: ["South Africa v Pakistan"] },
          { title: "Testing Game", subItems: ["Test A v Test B"] },
          { title: "International Twenty20 Matches", subItems: ["West Indies v Bangladesh"] },
          { title: "Test Matches", subItems: ["Australia v India"] },
          { title: "Womens One Day Internationals", subItems: ["New Zealand Women v Australia Women"] },
          { title: "Womens International Twenty20 Matches", subItems: ["India Women v West Indies Women"] },
        ],
      },
      {
        title: "Football",
        subItems: [
          {
            title: "EGYPT League Cup",
            subItems: ["Pyramids FC v Al Ittihad Alexandria"],
          },
          {
            title: "NETHERLANDS KNVB Beker",
            subItems: [
              "FC Eindhoven v Excelsior",
              "MVV Maastricht v Feyenoord",
              "PSV v Koninklijke HFC",
              "Quick Boys v Fortuna Sittard",
              "RKC Waalwijk v Cambuur Leeuwarden",
            ],
          },
          {
            title: "ISRAEL Youth League",
            subItems: [
              "Bnei Sakhnin U19 v Beitar Nes Tubruk U19",
              "Ihud Bnei Shfaram U19 v Tzeirey Kafr Kana U19",
            ],
          },
          {
            title: "EUROPE Champions League Women",
            subItems: [
              "AS Roma (W) v Galatasaray SK (W)",
              "Lyon (W) v Wolfsburg (W)",
              "Real Madrid FC (W) v Chelsea (W)",
              "Twente (W) v Celtic (W)",
            ],
          },
          {
            title: "BOLIVIA Division Profesional",
            subItems: [
              "Aurora v Nacional Potosi",
              "CD Gualberto Villarroel v Blooming Santa Cruz",
              "Club Real Santa Cruz v Real Tomayapo",
              "Guabira v Royal Pari",
              "Oriente Petrolero v Bolivar",
              "Petrolero v Always Ready",
              "The Strongest v San Antonio FC",
              "Universitario de Vinto v Jorge Wilstermann",
            ],
          },
          {
            title: "ROMANIA Romanian Cup",
            subItems: [
              "CSM Scolar Resita v Csikszereda",
              "CSM Unirea Alba Iulia v CSM Ramnicu-Valcea",
              "Otelul Galati v ACS Sepsi OSK",
            ],
          },
          {
            title: "ENGLAND Professional Development League",
            subItems: ["Burnley U21 v Hull City U21"],
          },
          {
            title: "ENGLAND EFL CUP - QUARTER-FINALS",
            subItems: [
              "Arsenal v Crystal Palace",
              "Newcastle v Brentford",
              "Southampton v Liverpool",
              "Tottenham v Man Utd",
            ],
          },
          {
            title: "LIBYA Premier League",
            subItems: [
              "Al-Anwar - Wefaq Ajdabiya",
              "Asswehly - Abu Salim",
              "Olympic Azzaweya - Al-Ittihad Tripoli",
            ],
          },
          {
            title: "ITALY Coppa Italia",
            subItems: [
              "Atalanta v Cesena",
              "Inter v Udinese",
              "Juventus v Cagliari",
              "Roma v Sampdoria",
            ],
          },
          {
            title: "FRANCE Ligue 1",
            subItems: ["Monaco v Paris St-G"],
          },
          {
            title: "SCOTLAND Championship",
            subItems: ["Airdrieonians v Livingston"],
          },
          {
            title: "TANZANIA Ligi Kuu Bara",
            subItems: ["Simba Sports Club - Kengold", "Tabora United Fc - Coastal Union"],
          },
          {
            title: "MALTA Premier League",
            subItems: ["Floriana - Sliema Wanderers", "Hamrun Spartans - Mosta"],
          },
          {
            title: "ENGLAND Isthmian League Premier Division",
            subItems: [
              "Cheshunt FC - Bowers and Pitsea FC",
              "Chichester City - Whitehawk",
              "Horsham FC - Dartford",
            ],
          },
          {
            title: "GREECE Gamma Ethniki",
            subItems: ["Anagennisi Artas - Pas Amvrakikos"],
          },
          {
            title: "SPAIN LaLiga",
            subItems: ["Espanyol v Valencia", "Villarreal v Rayo Vallecano"],
          },
          {
            title: "SPAIN LaLiga2",
            subItems: [
              "Albacete v Levante",
              "Cordoba v Eibar",
              "Granada v FC Cartagena",
              "Malaga v Eldense",
              "Mirandes v Sporting Gijon",
              "Racing de Ferrol v Almeria",
              "Zaragoza v Oviedo",
            ],
          },
          {
            title: "COSTA RICA PRIMERA DIVISION - SEMI-FINALS",
            subItems: ["Deportivo Saprissa v Cs Herediano"],
          },
          {
            title: "ENGLAND National League",
            subItems: ["Rochdale - Tamworth"],
          },
          {
            title: "AUSTRALIA A-League",
            subItems: ["Adelaide United v Sydney FC"],
          },
          {
            title: "ENGLAND Premier League Cup",
            subItems: [
              "Charlton U21 v Birmingham U21",
              "Exeter City U21 v Bromley U21",
              "Stockport County U21 v Leeds United U21",
            ],
          },
          {
            title: "EGYPT Division 2 A",
            subItems: ["Olympic El Qanal v Tersana SC"],
          },
          {
            title: "ALGERIA Ligue 1",
            subItems: ["Kabylie v MC El Bayadh"],
          },
          {
            title: "EUROPE UEFA YOUTH LEAGUE - FINAL",
            subItems: ["Genk U19 v Puskas Akademia FC U19"],
          },
          {
            title: "MALTA League Women",
            subItems: ["Birkirkara FC W - Mgarr United W"],
          },
          {
            title: "ENGLAND National League South",
            subItems: ["Salisbury City - Maidstone United", "Tonbridge Angels - Chesham United"],
          },
          {
            title: "ENGLAND Isthmian League Cup",
            subItems: [
              "Chatham Town - Burgess Hill Town",
              "Harrow Borough - Binfield",
            ],
          },
          {
            title: "SOUTH AMERICA Brasil Ladies Cup Women",
            subItems: ["Bahia W - Kindermann W"],
          },
          {
            title: "SERBIA Prva Liga",
            subItems: ["FK Graficar v FK Trayal Krusevac"],
          },
          {
            title: "ARGENTINA Torneo Regional Amateur",
            subItems: ["Fundacion Amigos Por El Deporte - Lujan de Cuyo"],
          },
          {
            title: "ARGENTINA Reserve League - Final",
            subItems: ["CA River Plate (B) - Velez Sarsfield Res."],
          },
          {
            title: "ENGLAND National League North",
            subItems: [
              "Brackley Town - Kings Lynn Town",
              "Hereford United - Scarborough Athletic",
            ],
          },
          {
            title: "MOROCCO Botola Pro",
            subItems: ["FAR Rabat v Wydad Casablanca", "RSB Berkane v CODM Meknes"],
          },
          {
            title: "SCOTLAND League Two",
            subItems: ["Elgin City - Clyde", "Forfar Athletic - Peterhead"],
          },
          {
            title: "ENGLAND EFL Trophy",
            subItems: ["Blackpool v Aston Villa U21", "Peterborough v Northampton"],
          },
          {
            title: "KENYA Premier League",
            subItems: ["Gor Mahia FC v Ulinzi Stars"],
          },
          {
            title: "AZERBAIJAN Premier League",
            subItems: ["Shamakhi FK v Qarabag FK"],
          },
          {
            title: "SCOTLAND League One",
            subItems: ["Kelty Hearts - Arbroath"],
          },
          {
            title: "NORTHERN IRELAND NIFL Premiership",
            subItems: ["Dungannon Swifts - Linfield", "Glenavon - Crusaders"],
          },
          {
            title: "WORLD FIFA INTERCONTINENTAL CUP - FINAL",
            subItems: ["Real Madrid v Pachuca"],
          },
          {
            title: "SOUTH AFRICA Premiership",
            subItems: ["Orlando Pirates - Sekhukhune United"],
          },
          {
            title: "COLOMBIA PRIMERA A - FINAL",
            subItems: ["Tolima v Atletico Nacional Medellin"],
          },
        ],
      },
      {
          title: "Tennis",
          subItems: [
            {
              title: "ITF MEN - SINGLES M15 Tauranga (New Zealand)",
              subItems: [
                "Ajeet Rai v Reece Falck",
                "Casey Hoole v Kiranpal Pannu",
                "Harry Pugh v Finley Hall",
                "Jayden Court v Alexander Klintcharov",
                "Jesse Delaney v Derek Pham",
                "Kohei Hayashi v Isaac Becroft",
                "Lawrence Bataljin v Jay Dylan Hara Friend",
                "Matt Kuhar v Jack Loutit",
                "Moerani Bouzige v Harry Roberts",
                "Tai Leonard Sach v Corban Crowther",
                "Thijmen Loof v Mikal Statham",
              ],
            },
            {
              title: "ITF WOMEN - SINGLES W35 Tauranga (New Zealand)",
              subItems: [
                "Emma Van Poppel v Shiho Akita",
                "Eunji Oh v Maelys Bougrat",
                "Helena Guan v Bianca Compuesto",
                "Hwiwon Wi v Ying Zhang",
                "I Wen Wan v Yuka Hosoki",
                "Jaimee Fourlis v Ava Hrastar",
                "Janice Tjen v Katie Oliver",
                "Leilany Ipunesso v Amelia Zylberman",
                "Merel Hoedt v Yui Chikaraishi",
                "Monique Barry v Vivian Yang",
              ],
            },
            {
              title: "ATP - SINGLES Next Gen Finals - Jeddah (World)",
              subItems: [
                "Alex Michelsen v Nishesh Basavareddy",
                "Arthur Fils v Joao Fonseca",
                "Jakub Mensik v Learner Tien",
                "Juncheng Shang v Luca van Assche",
              ],
            },
            {
              title: "Virtual Tennis",
              subItems: ["Cameron Norrie v Pedro Martinez"],
            },
            {
              title: "ITF MEN - DOUBLES M15 Antalya (Turkey)",
              subItems: [
                "Dinko Dinev / Matthias Ujvary - Enrico Baldisserri / Manuel Mazza",
              ],
            },
            {
              title: "ITF MEN - DOUBLES M15 Doha (Qatar)",
              subItems: [
                "Oetzbach Adrian / Vasa Eero - Elamin Ammar / Smiej Yassine",
              ],
            },
            {
              title: "Testing",
              subItems: ["Test A v Test B"],
            },
          ],
        },
        {
          title: "Table Tennis",
          subItems: [
            {
              title: "MEN Setka Cup (World)",
              subItems: [
                "Andrii Peretiatko - Serhii Chuliukov",
                "Andrii Peretiatko - Serhii Khandetskyi",
                "Artem Yurkov - Andrii Derevianko",
                "Frantisek Schmidtmayer - Petr Orlowski",
                "Gregory Kuzmenko - Volodymyr Kaidakov",
                "Hryhorii Kulishov - Andrii Homylko",
                "Jan Simecek - Marek Cizek",
                "Maksim Baranov - Gregory Kuzmenko",
                "Maksim Baranov - Viktor Slozka",
                "Maksim Baranov - Volodymyr Kaidakov",
                "Marek Cizek - Petr Orlowski",
                "Oleksandr Bielskyi - Aleksandr Ivchuk",
                "Oleksiy Shindel - Serhii Chuliukov",
                "Orest Hura - Gregory Kuzmenko",
                "Orest Hura - Maksim Baranov",
                "Orest Hura - Roman Konkulovskyi",
                "Orest Hura - Viktor Slozka",
                "Roman Hnoievoi - Volodymyr Vysozkyi",
                "Roman Konkulovskyi - Maksim Baranov",
                "Roman Konkulovskyi - Viktor Slozka",
                "Roman Konkulovskyi - Volodymyr Kaidakov",
                "Serhii Khandetskyi - Andrii Homylko",
                "Valentyn Lobas - Dmytro Derevynskyi",
                "Valentyn Lobas - Volodymyr Vysozkyi",
                "Viktor Slozka - Gregory Kuzmenko",
                "Viktor Slozka - Volodymyr Kaidakov",
                "Vitalii Khamurda - Volodymyr Vysozkyi"
              ]
            },
            {
              title: "CZECH Liga Pro",
              subItems: [
                "Ales Hlawatschke - Jiri Pozarsky",
                "Ales Hlawatschke - Jiri Zuzanek",
                "Daniel Tuma - Tomas Andrle",
                "Daniel Tuma - Tomas Janata",
                "Didi, Julius - Jiri Jira",
                "Filip Mandrysz - Jaromir Kanok",
                "Filip Mandrysz - Vasil Stempak",
                "Frantisek Briza - Lukas Krok",
                "Frantisek Briza - Tomas Dousa",
                "Jan Briska - Daniel Tuma",
                "Jan Briska - Tomas Andrle",
                "Jan Steffan - Martin Kir",
                "Jan Steffan - Rostislav Hasmanda",
                "Jaromir Cernik - Pavel Berdych",
                "Jaromir Cernik - Pavel Sprynar",
                "Jaromir Kanok - Vasil Stempak",
                "Jaromir Kriz - Stanislav Hudec",
                "Jiri Grohsgott - Vladimir Kubat",
                "Jiri Jira - Pavel Petr",
                "Jiri Jira - Tomas Kucera",
                "Jiri Pozarsky - Michal Vondrak",
                "Jiri Zuzanek - Jiri Pozarsky",
                "Lubor Sulava - Jan Steffan",
                "Lubor Sulava - Milan Smrcek",
                "Lukas Krok - Marek Placek",
                "Marek Placek - Frantisek Briza",
                "Marek Placek - Tomas Dousa",
                "Martin Bittner - Zbynek Pagac",
                "Martin Kir - Lubor Sulava",
                "Martin Kir - Milan Smrcek",
                "Michal Regner - Jiri Louda",
                "Michal Vondrak - Ales Hlawatschke",
                "Michal Vondrak - Jiri Zuzanek",
                "Milan Smrcek - Jan Steffan",
                "Milan Smrcek - Rostislav Hasmanda",
                "Milan Vrabec - Jaromir Cernik",
                "Milan Vrabec - Vaclav Pulkrabek",
                "Milan Weber - Vlastimil Pszczolka",
                "Oldrich Stehlik - Radek Vosyka",
                "Ondrej Cmerda - Michal Regner",
                "Pavel Berdych - Milan Vrabec",
                "Pavel Berdych - Pavel Sprynar",
                "Pavel Petr - Didi, Julius",
                "Pavel Petr - Tomas Kucera",
                "Pavel Sprynar - Milan Vrabec",
                "Pavel Sprynar - Vaclav Pulkrabek",
                "Petr Uher - Jaromir Kriz",
                "Petr Uher - Radek Vosyka",
                "Radek Vosyka - Jaromir Kriz",
                "Radek Vosyka - Stanislav Hudec",
                "Radek Vosyka - Vana Lubomir",
                "Robin Pacha - Jiri Louda",
                "Robin Pacha - Ondrej Cmerda",
                "Rostislav Hasmanda - Lubor Sulava",
                "Rostislav Hasmanda - Martin Kir",
                "Stanislav Hudec - Petr Uher",
                "Sychra Martin - Daniel Tuma",
                "Sychra Martin - Jan Briska",
                "Tomas Andrle - Sychra Martin",
                "Tomas Andrle - Tomas Janata",
                "Tomas Janata - Jan Briska",
                "Tomas Janata - Sychra Martin",
                "Vaclav Pulkrabek - Jaromir Cernik",
                "Vaclav Pulkrabek - Pavel Berdych",
                "Vana Lubomir - Oldrich Stehlik",
                "Vasil Stempak - Zbynek Zientek",
                "Vosyka, Ladislav - Radek Vosyka",
                "Vosyka, Ladislav - Vana Lubomir",
                "Zbynek Pagac - Tomas Zahradnik",
                "Zbynek Zientek - Filip Mandrysz",
                "Zbynek Zientek - Jaromir Kanok"
              ]
            },
            {
              title: "TT Elite Series",
              subItems: [
                "Krzysztof Kapik - Krystian Kolodziej"
              ]
            }
          ]
        },
        
      "Badminton",
      {
          title: "Esoccer",
          subItems: [
            {
              title: "ESoccer GT Leagues (E)",
              subItems: [
                { match: "AC Milan (cavani) - Atletico Madrid (persie)" },
                { match: "Arsenal FC (vendetta) - Manchester City FC (professor)" },
                { match: "Arsenal FC (vendetta) - Manchester United FC (delpiero)" },
                { match: "Arsenal FC (vendetta) - Tottenham Hotspur FC (denver)" },
                { match: "Aston Villa (sato) - AC Milan (cavani)" },
                { match: "Aston Villa (sato) - Atletico Madrid (persie)" },
                { match: "Athletic Bilbao (diego) - Galatasaray (arthur)" },
                { match: "Athletic Bilbao (diego) - Olympique Lyonnais (klaus)" },
                { match: "Athletic Bilbao (diego) - SS Lazio (carlos)" },
                { match: "Atletico Madrid (persie) - Lille (drake)" },
                { match: "Borussia Dortmund (shelby) - AC Milan (cavani)" },
                { match: "Borussia Dortmund (shelby) - Lille (drake)" },
                { match: "Chelsea FC (cruise) - Arsenal FC (vendetta)" },
                { match: "Chelsea FC (cruise) - Manchester City FC (professor)" },
                { match: "Chelsea FC (cruise) - Tottenham Hotspur FC (denver)" },
                { match: "Fenerbahce Istanbul (cruise) - Real Sociedad (delpiero)" },
                { match: "Galatasaray (arthur) - Olympique Lyonnais (klaus)" },
                { match: "Galatasaray (arthur) - Tottenham Hotspur FC (potter)" },
                { match: "Manchester City FC (professor) - Tottenham Hotspur FC (denver)" },
                { match: "Manchester United FC (delpiero) - Arsenal FC (vendetta)" },
                { match: "Manchester United FC (delpiero) - Chelsea FC (cruise)" },
                { match: "Manchester United FC (delpiero) - Manchester City FC (professor)" },
                { match: "PAOK (denver) - Fenerbahce Istanbul (cruise)" },
                { match: "PAOK (denver) - Glasgow Rangers (vendetta)" },
                { match: "Sporting Braga (professor) - Glasgow Rangers (vendetta)" },
                { match: "SS Lazio (carlos) - Galatasaray (arthur)" },
                { match: "SS Lazio (carlos) - Olympique Lyonnais (klaus)" },
                { match: "Tottenham Hotspur FC (denver) - Manchester City FC (professor)" },
                { match: "Tottenham Hotspur FC (denver) - Manchester United FC (delpiero)" },
                { match: "Tottenham Hotspur FC (potter) - Athletic Bilbao (diego)" },
                { match: "Tottenham Hotspur FC (potter) - Olympique Lyonnais (klaus)" },
                { match: "Tottenham Hotspur FC (potter) - SS Lazio (carlos)" }
              ]
            }
          ]
        },
        
        {
          title: "Basketball",
          subItems: [
            {
              title: "EUROPE EUROCUP",
              subItems: [
                "Club Joventut Badalona v Trefl Sopot",
                "Hamburg Towers v Hapoel Jerusalem BC",
                "Hapoel Tel Aviv BC v Besiktas JK",
                "JL Bourg v Reyer Venezia",
                "KK Buducnost v Aquila Basket Trento",
                "KK Cedevita Olimpija Ljubljana v Turk Telekom BK",
                "Ratiopharm Ulm v BC Wolves",
                "Valencia Basket v U-BT Cluj-Napoca"
              ]
            },
            {
              title: "ITALY NATIONAL U19 DIVISION",
              subItems: [
                "Casapulla U19 - Napoli Basket U19",
                "Grantorino BK Draft U19 - Derthona U19",
                "San Mauro Basket U19 - CUS Torino U19"
              ]
            },
            {
              title: "EUROPE CHAMPIONS LEAGUE",
              subItems: [
                "Basketball Nymburk v Promitheas Patras BC",
                "Basquet Manresa v Derthona Basket",
                "BC Oostende v Petkim Spor",
                "Benfica Basket v BV Chemnitz 99",
                "CB Canarias v AO Kolossos Rodou",
                "Igokea v Wurzburg Baskets",
                "Manisa Buyuksehir Belediye v KK FMP",
                "Nanterre 92 v Hapoel Holon BC",
                "Pallacanestro Reggiana v Falco Szombathely",
                "Rasta Vechta v Galatasaray SK",
                "Saint-Quentin Basket-Ball v Pinar Karsiyaka",
                "UCAM Murcia v Peristeri BC",
                "Wilki Morskie Szczecin v Baloncesto Malaga",
                "WKS Slask Wroclaw v Rytas Vilnius"
              ]
            },
            {
              title: "USA NCAA",
              subItems: [
                "Cal Poly Slo Mustangs - Denver Pioneers",
                "Charlotte 49ers - West Georgia University",
                "Colorado State Rams - Radford",
                "Dayton Flyers - UNLV Rebels",
                "East Carolina - Florida International Panthers",
                "Florida State - Winthrop",
                "Georgia Southern Eagles - Gardner-Webb",
                "Howard Bison - Drexel",
                "Kansas State - Drake",
                "Mississippi State - Central Michigan",
                "North Carolina AandT - Coastal Carolina",
                "North Carolina-Asheville - North Florida",
                "Oregon State - Sacramento State",
                "Quinnipiac - Holy Cross",
                "Robert Morris Colonials - Towson",
                "Siena Saints - St. Bonaventure",
                "South Carolina - Clemson",
                "Southern Miss - Lamar",
                "St. Johns - DePaul",
                "Stanford Cardinal - Merrimack College Warriors",
                "Stony Brook - Marist",
                "UL Monroe - Houston Christian",
                "Utah State - San Diego Tritons",
                "Villanova - Seton Hall Pirates",
                "Wake Forest - James Madison",
                "Western Illinois - Tennessee Tech",
                "Western Kentucky - Seattle Redhawks",
                "Wichita State - UMKC"
              ]
            },
            {
              title: "USA NBA",
              subItems: [
                "Atlanta Hawks @ San Antonio Spurs",
                "Brooklyn Nets @ Toronto Raptors",
                "Charlotte Hornets @ Washington Wizards",
                "Chicago Bulls @ Boston Celtics",
                "Denver Nuggets @ Portland Trail Blazers",
                "Golden State Warriors @ Memphis Grizzlies",
                "Indiana Pacers @ Phoenix Suns",
                "Los Angeles Clippers @ Dallas Mavericks",
                "Los Angeles Lakers @ Sacramento Kings",
                "New Orleans Pelicans @ Houston Rockets",
                "New York Knicks @ Minnesota Timberwolves",
                "Oklahoma City Thunder @ Orlando Magic",
                "Utah Jazz @ Detroit Pistons"
              ]
            },
            {
              title: "BRAZIL NBB",
              subItems: [
                "Mogi das Cruzes - SC Corinthians Paulista",
                "Sao Jose - Pinheiros"
              ]
            },
            {
              title: "WORLD Champions League Americas",
              subItems: [
                "Flamengo - Toros de Chiriqui"
              ]
            },
            {
              title: "EUROPE EUROLEAGUE",
              subItems: [
                "ALBA Berlin v BC Zalgiris Kaunas",
                "Anadolu Efes SK v KK Crvena zvezda Belgrade",
                "BC Olympiakos Piraeus v Virtus Bologna",
                "FC Barcelona v Fenerbahce Istanbul",
                "KK Partizan Belgrade v ASVEL Lyon-Villeurbanne",
                "Maccabi Tel-Aviv v Baskonia Vitoria-Gasteiz",
                "Panathinaikos BC v Olimpia Milano",
                "Paris Basketball v Real Madrid"
              ]
            },
            {
              title: "ICELAND Premier League Women",
              subItems: [
                "Athena Umfk W - Haukar W",
                "Thor AK Akureyri W - Hamar W"
              ]
            },
            {
              title: "ITALY Serie A2 Women",
              subItems: [
                "Foxes Giussano W - Spezzina W"
              ]
            },
            {
              title: "FRANCE LNB",
              subItems: [
                "Cholet - Dijon"
              ]
            },
            {
              title: "ARGENTINA Torneo Federal Women",
              subItems: [
                "Sportivo Avellaneda W - Club Talleres RPB W"
              ]
            },
            {
              title: "ARGENTINA LIGA A",
              subItems: [
                "Asociacion Deportiva Atenas - Obras Sanitarias",
                "Ciclista Olimpico - San Martin de Corrientes"
              ]
            },
            {
              title: "NORWAY BLNO",
              subItems: [
                "Baerum Basket - Asker Aliens"
              ]
            },
            {
              title: "Testing",
              subItems: [
                "TEST A v TEST B",
                "TEST X v TEST Y"
              ]
            },
            {
              title: "SPAIN Tercera FEB",
              subItems: [
                "Nou Paterna - Castello II"
              ]
            },
            {
              title: "ARGENTINA Liga Femenina Women",
              subItems: [
                "Ferrocarril Oeste W - Obras Basket W"
              ]
            },
            {
              title: "EUROPE BNXT League",
              subItems: [
                "Proximus Spirou Charleroi - Hubo Limburg United"
              ]
            },
            {
              title: "EUROPE EUROLEAGUE WOMEN",
              subItems: [
                "Valencia Basquet Women - Zaragoza W"
              ]
            },
            {
              title: "IRAQ Premier League",
              subItems: [
                "Zakho SC - Al-Karkh Sc"
              ]
            },
            {
              title: "PORTUGAL Division 1 Women",
              subItems: [
                "Sporting Lisboa W - CB Queluz W"
              ]
            },
            {
              title: "COLOMBIA LBP - FINAL",
              subItems: [
                "Motilones Del Norte - Caribbean Storm Islands"
              ]
            },
            {
              title: "AUSTRALIA WNBL WOMEN",
              subItems: [
                "Townsville Fire W - Sydney Flames W"
              ]
            },
            {
              title: "URUGUAY LIGA URUGUAYA",
              subItems: [
                "Aguada - Trouville"
              ]
            },
            {
              title: "El Salvador LNB Segunda",
              subItems: [
                "Destroyer - Bulldogs"
              ]
            }
          ]
        },
        
        {
          "title": "Volleyball",
          "subItems": [
            {
              "title": "SOUTH KOREA Volleyball League Women",
              "subItems": [
                "Gimcheon Expressway Co Hi-Pass W - AI Peppers Gwangju W",
                "GS Caltex Seoul W - Hwaseong IBK Altos W"
              ]
            },
            {
              "title": "TURKEY 2nd League Women",
              "subItems": [
                "Ates Spor W - Cekmekoy Spor W",
                "Beta Karsiyaka W - Volkan Guc Spor W",
                "Beylikduzu Beykent W - Vefa Spor W",
                "Cimnastik Spor W - Mersin Ihtisas Tek Okullari W",
                "Kuzey Yildizlari W - Dinamo Spor W",
                "Robert W - Bahcelievler Voleybol ii W"
              ]
            },
            {
              "title": "WORLD Club World Championship Women",
              "subItems": [
                "NEC Red Rockets W - Praia Clube W",
                "Tianjin Bohai Bank W - Vero Volley Milano W"
              ]
            },
            {
              "title": "TURKEY 2nd League",
              "subItems": [
                "07 Gazi Spor - Koycegiz Gol Ve Genclik",
                "Golcuk Bld - Inegol Bld.",
                "Sureyyapasa Genclik - Yenisehir Bld."
              ]
            },
            {
              "title": "EUROPE Challenge Cup",
              "subItems": [
                "Prefaxis Menen - CSKA Sofia",
                "Spor Toto - TSV Herrsching",
                "Tourcoing - Politechnika Lublin",
                "Volley NAFELS - Melilla"
              ]
            },
            {
              "title": "EUROPE CEV Cup",
              "subItems": [
                "Diatec Trentino - SL Benfica",
                "Milon - Guaguas",
                "Pafiakos Paphos - Draisma Dynamo",
                "Tours VB - Mladost Zagreb",
                "VK LVI Prague - Asseco Resovia Rzeszow",
                "Volley Amriswil - Omonia Nicosia",
                "Ziraat Bankasi - Galatasaray"
              ]
            },
            {
              "title": "BRAZIL SuperLiga",
              "subItems": [
                "AA Neurologia Ativa - Corinthians Guarulhos",
                "Dentil/Praia Clube - Minas Tenis Clube"
              ]
            },
            {
              "title": "AUSTRIA Austria Cup",
              "subItems": [
                "SK Zadruga AICH/DOB - SG Union Raiffeisen Waldviertel"
              ]
            },
            {
              "title": "KAZAKHSTAN Vyshaya Liga A",
              "subItems": [
                "Aisultan Kostanay - Kaysar",
                "Berel - Ushkyn-Semey",
                "Dynamo Shymkent - Turan Turkestan",
                "VC Aktobe II - Astana SDD"
              ]
            },
            {
              "title": "HUNGARY Hungarian Cup",
              "subItems": [
                "Szegedi - Vegyesz"
              ]
            },
            {
              "title": "BOSNIA AND HERZEGOVINA Premijer liga",
              "subItems": [
                "Borac - Ljubinje",
                "Modrica Optima - Kakanj"
              ]
            },
            {
              "title": "TURKEY 1. Ligi",
              "subItems": [
                "Bigadic - Ziraat Bankasi Ankara II",
                "Depsas Enerji Spor - Fenerbahce 2",
                "Karapinar Anadolu - Gebze Genclik",
                "Kocaeli BSB Kagit Spor - Saint Joseph",
                "Niksar Belediye - Gaziantep Genclik"
              ]
            },
            {
              "title": "EUROPE CHAMPIONS LEAGUE",
              "subItems": [
                "Berlin Recikling Volleys - Noliko Maaseik",
                "Giesen/Hildesheim - Olympiacos Piraeus",
                "Halkbank Ankara - Ceske Budejovice",
                "Jastrzebski Wegiel - Chaumont VB52",
                "Revivre Milano - Hypo Tirol Innsbruck",
                "SVG Luneburg - Levski Sofia",
                "Zawiercie - Knack Roeselare"
              ]
            },
            {
              "title": "DENMARK Volleyligaen",
              "subItems": [
                "Ikast KFUM - Odense Volleyball"
              ]
            },
            {
              "title": "SOUTH KOREA Volleyball League",
              "subItems": [
                "Cheonan Hyundai Skywalkers - Suwon KEPCO",
                "Daejeon Samsung Bluefangs - Uijeongbu KB Insurance Stars"
              ]
            },
            {
              "title": "FRANCE LIGUE A WOMEN",
              "subItems": [
                "Bordeaux-Merignac W - Beziers Angels W",
                "RC Cannes W - Vandoeuvre Nancy VB W",
                "VC Marcq-en-Baroeul W - Le Cannet W"
              ]
            },
            {
              "title": "SWEDEN Elitserien Women",
              "subItems": [
                "Falkoping W - Goteborg W"
              ]
            },
            {
              "title": "ROMANIA DIVIZIA A1 WOMEN",
              "subItems": [
                "Corona Brasov W - CSM Constanta W",
                "CSM Bucuresti W - Arges Pitesti W",
                "Lugoj W - Dinamo Romprest Bucharest W"
              ]
            },
            {
              "title": "SERBIA Serbia Cup Women",
              "subItems": [
                "Sremska M. W - Tent Obrenovac W",
                "Zeleznicar W - Crvena Zvezda Beograd W"
              ]
            },
            {
              "title": "SWEDEN Elitserien",
              "subItems": [
                "Hylte Halmstad VBK - Orkelljunga VK"
              ]
            },
            {
              "title": "SLOVAKIA Slovakia Cup Women",
              "subItems": [
                "Academy Zilina W - Nove Mesto nad Vahom W",
                "UKF Nitra W - VKP Bratislava W"
              ]
            },
            {
              "title": "ISRAEL Premier League Women",
              "subItems": [
                "Hapoel Kiryat Ata W - Hapoel Rehovot W",
                "Maccabi Hadera W - Hapoel Kfar-Saba W"
              ]
            },
            {
              "title": "MONGOLIA PLV",
              "subItems": [
                "Natur Med Tolun - Mintonette Gobi",
                "Umnugovi Energy - Tuv Mig"
              ]
            },
            {
              "title": "ESTONIA Esiliiga",
              "subItems": [
                "EMU SK - Audentese Sg / Noortekoondis"
              ]
            },
            {
              "title": "SWITZERLAND League 1 W",
              "subItems": [
                "Vbc Munsingen W - Volley Koniz W"
              ]
            },
            {
              "title": "BULGARIA SuperLiga",
              "subItems": [
                "Beroe - Dea Sport Burgas",
                "Hebar - Pirin"
              ]
            },
            {
              "title": "POLAND PlusLiga",
              "subItems": [
                "Cuprum Stilon Gorzow Wielkopolski - PGE Skra Belchatow"
              ]
            },
            {
              "title": "CROATIA Prva Liga Women",
              "subItems": [
                "Velika Gorica W - Haok Dubrava-2 W"
              ]
            },
            {
              "title": "EUROPE MEVZA",
              "subItems": [
                "MOK Mursa Osijek - MTB Maribor"
              ]
            },
            {
              "title": "NETHERLANDS Eredivisie Women",
              "subItems": [
                "Sliedrecht Sport W - Sudosa-Desto W"
              ]
            },
            {
              "title": "POLAND Polish Cup Women",
              "subItems": [
                "Chemik Police W - MKS Kalisz W",
                "Stal Mielec W - Impel Wroclaw W"
              ]
            },
            {
              "title": "FINLAND Mestaruusliiga Women",
              "subItems": [
                "Nurmon Jymy W - LP-Vampula W"
              ]
            },
            {
              "title": "GERMANY DVV Cup Women",
              "subItems": [
                "SC Potsdam W - Dresdner SC W"
              ]
            },
            {
              "title": "MONGOLIA PLV Women",
              "subItems": [
                "Altayn Bars W - Ulaanbaatar Phoenix W",
                "Khuvsgul Erchim W - Hobby Ice W"
              ]
            },
            {
              "title": "KAZAKHSTAN Vyschaya League Women",
              "subItems": [
                "Astana W - Kaisar Kyzylorda W",
                "Taraz W - Atyrau W"
              ]
            },
            {
              "title": "ROMANIA DIVIZIA A1",
              "subItems": [
                "C.S. Arcada Galati - Muncipal Zalau"
              ]
            },
            {
              "title": "CZECH REPUBLIC Extraliga Women",
              "subItems": [
                "Kralovo Pole Brno W - VK Prerov Precheza W"
              ]
            }
          ]
        },
        
        {
          "title": "Snooker",
          "subItems": [
            {
              "title": "GERMANY German Masters - Qualification",
              "subItems": [
                "Alexander Ursenbacher - Jonas Luz" ,
                "Alfie Burden - Mostafa Dorgham" ,
                "Amir Sarkhosh - Reanne Evans" ,
                "Andrew Pagett - Paul Deaville" ,
                "B. Mertens - Joshua Thomond" ,
                "D. Grace - Anton Kazakov" ,
                "Dean Young - Joshua Cooper" ,
                "Ian Burns - Antoni Kowalski" ,
                "Ishpreet Chadha - Liam Davies" ,
                "Michael Holt - Iulian Boiko" ,
                "Ross Muir - Robbie Mcguigan" ,
                "Sunny Akani - H. Yassen" 
              ]
            }
          ]
        },
        {
          "title": "Ice Hockey",
          "subItems": [
            {
              "title": "USA AHL",
              "subItems": [
                "Bakersfield Condors - Henderson Silver Knights",
                "Chicago Wolves - Milwaukee Admirals",
                "Cleveland Monsters - Utica Comets",
                "Coachella Valley Firebirds - San Jose Barracuda",
                "Lehigh Valley Phantoms - Providence Bruins",
                "Ontario Reign - Calgary Wranglers",
                "Rochester Americans - Syracuse Crunch",
                "Tucson Roadrunners - San Diego Gulls",
                "Wilkes-Barre/Scranton Penguins - Toronto Marlies"
              ]
            },
            {
              "title": "USA NHL",
              "subItems": [
                "Anaheim Ducks - Winnipeg Jets",
                "Dallas Stars - Toronto Maple Leafs",
                "Detroit Red Wings - Philadelphia Flyers",
                "Minnesota Wild - Florida Panthers",
                "San Jose Sharks - Winnipeg Jets",
                "Utah Hockey Club - Vancouver Canucks"
              ]
            },
            {
              "title": "SWITZERLAND National League",
              "subItems": [
                "EV Zug - Geneve-Servette HC",
                "HC Davos - SCL Tigers",
                "Kloten Flyers - HC Lugano",
                "Lausanne HC - HC Ambri-Piotta",
                "Rapperswil-Jona Lakers - SC Bern",
                "ZSC Lions - HC Ajoie"
              ]
            },
            {
              "title": "FINLAND Liiga",
              "subItems": [
                "Assat - HPK",
                "IFK Helsinki - Vaasan Sport",
                "KooKoo - K-Espoo",
                "Lukko - KalPa",
                "Oulun Karpat - Mikkelin Jukurit",
                "Pelicans - SaiPa",
                "TPS - JYP Jyvaskyla"
              ]
            },
            {
              "title": "SWEDEN HockeyAllsvenskan",
              "subItems": [
                "AIK IF - BIK Karlskoga",
                "Almtuna IS - Nybro Vikings IF",
                "IF Bjorkloven - Mora IK",
                "IK Oskarshamn - Vimmerby HC",
                "Ostersunds IK - Sodertalje SK",
                "VIK Vasteras HK - Tingsryds AIF"
              ]
            },
            {
              "title": "FINLAND Mestis",
              "subItems": [
                "IPK - TUTO Hockey",
                "Jokipojat - KeuPa HT"
              ]
            },
            {
              "title": "GERMANY DEL",
              "subItems": [
                "Grizzlys Wolfsburg - ERC Ingolstadt",
                "Iserlohn Roosters - Schwenninger Wild Wings"
              ]
            }
          ]
        }
        ,
        {
          "title": "E Games",
          "subItems": [
            {
              "title": "COUNTER - STRIKE 2 - Frost and Fire South America",
              "subItems": [
                "Team Solid - 9z Academy",
                "Vikings Kr - Nitro.Gg"
              ]
            },
            {
              "title": "COUNTER - STRIKE 2 - European Pro League",
              "subItems": [
                "heimo esports - Astralis Talent",
                "Viperio - Wopa"
              ]
            }
          ]
        }
        ,
        {
          "title": "Futsal",
          "subItems": [
            {
              "title": "THAILAND Thai League",
              "subItems": [
                "Bangkok Bts - Rajabhat Phetchaburi",
                "Nakhonratchasima - Black Pearl United"
              ]
            },
            {
              "title": "UZBEKISTAN Championship",
              "subItems": [
                "Metallurg Bekabad - AGMK"
              ]
            }
          ]
        }
        ,
      "Handball",
      {
          "title": "Kabaddi",
          "subItems": [
            {
              "title": "Pro Kabaddi League 2024-25",
              "subItems": [
                "Patna Pirates vs Telugu Titans",
                "Tamil Thalaivas vs Bengal Warriorz"
              ]
            }
          ]
        }
        ,
      "Golf",
      "Rugby League",
      {
          "title": "Boxing",
          "subItems": [
            {
              "title": "UFC",
              "subItems": [
                "Price N. - Morono A."
              ]
            }
          ]
        }
        ,
      "Beach Volleyball",
      "Mixed Martial Arts",
      "MotoGP",
      {
          "title": "Chess",
          "subItems": [
            {
              "title": "Virtual Cricket League",
              "subItems": [
                "Chennai Super Kings T10 v Mumbai Indians T10",
                "Pakistan T10 v West Indies T10",
                "Peshawar Zalmi T10 v Lahore Qalandars T10"
              ]
            },
            {
              "title": "World Super T10 League",
              "subItems": [
                "Leaping Leopards v Raging Rhinos"
              ]
            }
          ]
        }
        ,
      "Cycling",
      "Motorbikes",
      "Athletics",
      "Basketball 3X3",
      "Sumo",
      {
          "title": "Virtual Sports",
          "subItems": [
            {
              "title": "Virtual Cricket League",
              "subItems": [
                {
                  "title": "Melbourne Stars T10 v Adelaide Strikers T10"
                }
              ]
            }
          ]
        }
        ,
      "Motor Sports",
      "Baseball",
      "Rugby Union",
      "Darts",
      {
          "title": "American Football",
          "subItems": [
            {
              "title": "USA NCAA",
              "subItems": [
                "James Madison - Western Kentucky",
                "UNLV - California Golden Bears"
              ]
            }
          ]
        }
        ,
      "Soccer",
      "Esports",
      "Boat Racing",
    ],
  },
];
const Sidebar = () => {
  const navigate=useNavigate();
  const [mainItemsVisible, setMainItemsVisible] = useState(
    sidebarItems.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );
  const [visibleItems, setVisibleItems] = useState({});
  const [activeItem, setActiveItem] = useState(null); // Track active item

  const toggleMainItemVisibility = (index) => {
    setMainItemsVisible((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleVisibility = (path) => {
    const pathKey = path.slice(0, -1).join("-");
    const clickedItemKey = path.join("-");

    setVisibleItems((prev) => ({
      ...prev,
      [pathKey]: prev[pathKey] === clickedItemKey ? null : clickedItemKey,
    }));

    // Set active item for sub-items
    if (activeItem === clickedItemKey) {
      setActiveItem(null); // Deactivate if already active
    } else {
      setActiveItem(clickedItemKey); // Activate the clicked item
    }
  };

  const handleSubItemClick = (subItem, path) => {
    // console.log("Clicked sub-item:", subItem);
    // console.log("Sub-item path:", path);
    navigate(`/${subItem}`);
  };

  const renderSubItems = (subItems, path = []) => {
    if (!Array.isArray(subItems)) return null;

    return (
      <ul className="accordion-collapse">
        {subItems.map((subItem, index) => {
          const newPath = [...path, index];
          const parentPathKey = path.join("-");
          const isSubItemVisible =
            visibleItems[parentPathKey] === newPath.join("-");
          const hasNestedItems =
            typeof subItem === "object" && subItem.subItems?.length > 0;

          const isActive = activeItem === newPath.join("-"); // Check if item is active

          return (
            <li key={index} className="accordion-item">
              <div
                className={`accordion-button ${isActive ? "active" : ""}`}
                onClick={() => {
                  handleSubItemClick(subItem, newPath); // Handle click
                  toggleVisibility(newPath); // Toggle visibility
                }}
              >
                <span>
                  {typeof subItem === "string" ? subItem : subItem.title}
                </span>
                {hasNestedItems && (
                  <FontAwesomeIcon
                    icon={isSubItemVisible ? faChevronUp : faChevronDown}
                    className="arrow"
                  />
                )}
              </div>
              {hasNestedItems &&
                isSubItemVisible &&
                renderSubItems(subItem.subItems, newPath)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="sidebar">
      <ul className="accordion">
        {sidebarItems.map((item, index) => (
          <li key={index} className="accordion-item">
            <div
              className={`accordion-button ${
                activeItem === `${index}` ? "active" : ""
              }`}
              onClick={() => toggleMainItemVisibility(index)}
            >
              <span>{item.title}</span>
              <FontAwesomeIcon
                icon={mainItemsVisible[index] ? faChevronUp : faChevronDown}
                className="arrow"
              />
            </div>
            {mainItemsVisible[index] && renderSubItems(item.subItems, [index])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;