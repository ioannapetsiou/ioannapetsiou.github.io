var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiaW9hbm5hcGV0c2lvdSIsImEiOiJjbHhkbzhjcG8wN2s3MmtvYXpvZ2lreW9pIn0.lGIkLLrej-07potspsQP1Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Attacks Towards Journalists and Media Workers: The 10 Most Dangerous Countries',
    subtitle: 'Analyzing Attacked (Killed, Imprisoned, Missing) Journalists and Media Workers Worldwide from 1992 to 2023 ',
    byline: 'By <a href="https://github.com/ioannapetsiou">Ioanna Petsiou</a>',
    footer: `<br>Methodology:</br> Data and Information Source: <a href="https://cpj.org/data/">Committee to Protect journalists - CPJ </a> 
        <br>One unlisted case in Africa is not included in the charts. </br>
        Totalitarian regimes or conflict-ridden countries may underreport or misrepresent attacks on journalists and media workers, affecting the accuracy of statistics. 
        <br>In the "Killed" category both confirmed and unconfirmed motives are included.</br>
        More information can be found on the <a href="https://github.com/ioannapetsiou/attacks_on_journalists">GitHub repository</a> with the data analysis.
        <br>Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.</br>
    `,
    chapters: [
        {
            id: 'introduction',
            alignment: 'center',
            hidden: false,
           // title: 'Journalism',
           // image: 'screenshot.png',
            description: `
                <p><b><i><u>Journalists across the world face serious risks and threats every day, just for doing their jobs – reporting the news and bringing information to the public </u></i></b>, says <a href="https://courier.unesco.org/en/articles/journalism-dangerous-profession"> Unesco</a> - <i>and it's right</i>.</p>
                <p>Journalism is a perilous profession, often marked by significant risks and attacks. The dedication to uncover the truth and inform the public can come at a high cost. The phrase <a href="https://www.academia.edu/33750163/Fair_game_Journalists_experiences_of_online_abuse">"If you can't take the heat, get out of the newsroom"</a> is familiar to many journalists, and it has driven some to leave the profession. However, the challenges have extended beyond the newsroom, affecting journalists in the outside world as well. </p>    
                `, 
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
            ]
        },
        {
            id: 'intro-chart',
            alignment: 'center',
            hidden: false,
            title: 'Attacks faced by Journalists and Media Workers', 
           // image: 'screenshot.png',
            description: `
                <p>Journalists and media workers can encounter various forms of <i>attacks</i>, from verbal and online harassment to more severe threats such as <u>being killed, imprisoned, or disappearing</u>. The <a href="https://cpj.org/data/">Committee to Protect Journalists</a>, also known as CPJ, maintains a database that documents these incidents (killed, imprisoned, missing), providing valuable insights into the dangers faced by journalists and media workers.</p>
                <iframe src='https://flo.uri.sh/visualisation/18898110/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18898110/?utm_source=embed&utm_campaign=visualisation/18898110' target='_top' style='text-decoration:none!important'> </a></div>
                <p>Among the three types of attacks documented by CPJ, getting killed is the most common threat faced by journalists and media workers. 
                Of those killed, <b> 42% were murdered</b>, all due to their journalism activities. Additionally, 32% were killed in unknown circumstances, 
                14.5% in crossfire, and 11.5% during dangerous assignments.
                Overall, <b><u>nearly three in four of those killed had a confirmed motive</u></b>, indicating they died because of their work.</p>
                <p>It's important to note that the reasons of death of media workers are not as frequently highlighted as those of journalists. 
                98% of media workers died due to unknown circumstances.</p>                `, 
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
            ]
        },
        {
            id: 'before-second-part',
            alignment: 'center',
            hidden: false,
            title: 'The map highlights the countries with the most attacks on journalists and media workers across all categories, from 1992 to 2023',
            //description: `
               // <p></p>
               // `, 
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'just-the-map',
            alignment: 'center',
            hidden: true,
            //title: 'The map highlights the countries with the most attacks on journalists and media workers across all categories, from 1992 to 2023',
            //description: `
               // <p></p>
               // `, 
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-part-chart',
            alignment: 'center',
            hidden: false,
            title: 'Attacks By Continent',
           // image: 'screenshot.png',
            description: `
                <p>Looking at the map, it is quite noticeable that <b>7 out of the 10 countries with the most attacks on journalists and media workers are in Asia</b>. It is the continent with the highest number of attacks on journalists and media workers in each attack category as well as in the total number of attacks.</p>
                <iframe src='https://flo.uri.sh/visualisation/18935068/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/18935068/?utm_source=embed&utm_campaign=visualisation/18935068' target='_top' style='text-decoration:none!important'>  </a></div>
                <p>However, this is no surpise. Only in the 21st century, the Middle East has experienced 25 different armed conflicts, 
                many of which are still ongoing, while political and social unrest seems to be never-ending. Clearly, this is a geographical region where one war follows another, and one socio-political tension leads to another, resulting in low levels of democracy and justice.</p>
                <p>The Middle East is not the only problem Asia has to face. In 2023, China was 179th in <a href="https://rsf.org/en/country/china"> World's Press Freedom Index</a> (an annual ranking of countries compiled and published by Reporters Without Borders (RSF) since 2002 based upon the organization's own assessment of the countries' press freedom records in the previous year). China is often characterized as one of the largest jailer of journalists.</p> 
                <p>It's important to note that totalitarian regimes or conflict-ridden countries may underreport or misrepresent attacks on journalists and media workers. 
                In North America, the ongoing drug war and gang-violence significantly influences the number of reported attacks on journalists and media workers. 
                Journalists who attempt to cover these stories often face threats and attacks, such as the ones mentioned above. 
                However, due to government interests, many of these cases go unreported. Same thing happens in totalitarian countries, where journalists and media workers are considered a threat. </p>
                `, 
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'before-each-country',
            alignment: 'center',
            hidden: false,
            title:'Diving into each of the Top 10 Most Dangerous Countries for Journalists and Media Workers by the Total Number of Attacks (1992-2023)',
            //description:  `  `,

            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Russia',
            alignment: 'left',
            hidden: false,
            title: 'Russia',
            description:  `
                <p>Ranks as the 10th country in the world for the most attacks on journalists and media workers, with 128 attacks. It also ranks as <b>4th in the world for most missing journalists</b>, with 7 missing. From 1992 to 2023, <b>48 journalists were imprisoned and 83 were killed</b>. In 2023, it was 164th <a href="https://rsf.org/en/country/russia"> World's Press Freedom Index</a>.</p>
                <p>Aleksandr Sokolov, a Russian journalist, was sentenced to 3.5 years in prison in 2017 on extremism charges after publishing investigative reports on government corruption. His arrest in 2015 was widely seen as politically motivated and linked to his journalistic activities​.</p>
             `,
            location: {
                center: [96.77940, 62.86967],
                zoom: 3.51,
                pitch: 0.00,
                bearing: -10.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Ethiopia',
            alignment: 'right',
            hidden: false,
            title: 'Ethiopia',
           //image: './path/to/image/source.png',
            description: `
            <p>Ranks as 9th, with 146 imprisoned and 5 killed journalists and media workers, totaling in 151 attacks. Due to the high number of imprisonments, it also ranks <b>4th in the world for most imprisoned journalists</b>.</p>
            <p>Amir Aman Kiyaro, a freelance video journalist for The Associated Press, was detained on November 28, 2021, for allegedly violating Ethiopia’s state of emergency and anti-terrorism laws by interviewing members of the Oromo Liberation Army (OLA). He was held without charge for almost three months, during which he faced repeated interrogations and deteriorating health conditions before being granted bail and released on April 1, 2022.
            </p>
            `,
            location: {
                center: [39.61272, 9.07139],
                zoom: 5.52,
                pitch: 0.00,
                bearing: 22.40,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 4, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation:false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'israel-and-occupied-palestinian-territory',
            alignment: 'left',
            hidden: false,
            title: 'Israel and Occupied Palestinian Territory',
            //image: './path/to/image/source.png',
            description: `
                <p>Ranks as 8th, with 54 imprisoned, 99 killed and 2 missing journalists and media workers. It also ranks <b>5th in the world for most killed journalists</b>. Out of the 155 total attacks from 1992 to 2023, 93 of them took place in a single year, 2023, due to the Israel - Hamas war. </p>
                <p>Ahmed Shehab, a Palestinian journalist for Sowt Al-Asra Radio (Radio Voice of the Prisoners), was killed along with his wife and three children in an Israeli airstrike struck his house in Jabalia, located in the northern Gaza Strip.</p>
                `,
            location: {
                center: [34.77202, 31.86920],
                zoom: 8.44,
                pitch: 43.00,
                bearing: -70.21
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Phillipines',
            alignment: 'right',
            hidden: false,
            title: 'Phillipines',
           // image: './path/to/image/source.png',
            description: `
                <p>Ranked 7th, with a total of 161 attacks. Almost all of the attacks fall into the killed category, with 159 journalists being killed. This positions the Philippines as the <b>2nd highest in the world for the most journalists and media workers killed</b>.</p>
                <p>Journalist Perez was stabbed and fatally shot by an unidentified attacker in San Jose, Mindoro Occidental, after his morning show on DWDO Radio. His widow identified a local police official as the gunman, and local journalists believe Perez was targeted due to his program discussing irregularities in local mining and electricity projects. In February 2010, Officer Darwin Quimoyog was indicted for the killing.</p>
            `,
            location: {
                center: [123.24691, 11.58368],
                zoom: 5.35,
                pitch: 0.00,
                bearing: 19.84
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Mexico',
            alignment: 'left',
            hidden: false,
            title: 'Mexico',
            //image: './path/to/image/source.png',
            description: `
                <p>Ranks 6th, with the Reuters considering it <a href:"https://www.reuters.com/world/americas/mexico-deadliest-country-journalists-2022-watchdog-2022-12-14/"> "The worst country to be a journalist in"</a>.</p>
                <p>A total of 171 attacks was recorded in Mexico, of which 153 killings, ranking Mexico as <b>4th in the World for most killed journalists and media workers</b>, and 16 were missing journalists, ranking it as <b>first</b> for most missing journalists.
                <p>In late December 2022, Alan García, founder and editor of Escenario Calentano, was abducted along with Jesús Pintor Alegre and Fernando Moreno Villegas in Arcelia, Guerrero. The abduction was believed to be carried out by the criminal gang La Familia Michoacana. While Moreno and Pintor were released on January 11, 2023, García's whereabouts remained unknown as of early March 2023. His disappearance is linked to his journalistic work covering organized crime and corruption in the region​.</p>
                `,
            location: {
                center: [-102.54546, 24.30560],
                zoom: 4.74,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Syria',
            alignment: 'right',
            hidden: false,
            title: 'Syria',
            //image: './path/to/image/source.png',
            description: `
                <p>Syria ranks 5th due to the ongoing conflicts creating an extremely dangerous environment. A total of 193 attacks have been recorded. Syria is <b>second in the world with 10 missing journalists</b> and <b>third for having 154 journalists killed</b>. These numbers highlight the perilous situation in Syria, with 103 of those killings occurring due to crossfire.</p>
                <p>Abdul Rahman Ismael Yassin, a reporter for Hammouriyeh Media Office, died from injuries sustained in an airstrike on February 20, 2018, in eastern Ghouta. He was hit by shrapnel from a barrel bomb while en route to a hospital to report on the effects of Assad-aligned forces’ airstrikes. Ongoing shelling delayed his transfer to the hospital, where he succumbed to his injuries.</p>

            `,
            location: {
                center: [38.35670, 35.06661],
                zoom: 7.69,
                pitch: 3.50,
                bearing: -15.93
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'China',
            alignment: 'left',
            hidden: false,
            title: 'China',
            //image: './path/to/image/source.png',
            description: `
                <p>Ranks 4th, and is considered the <b> world's 3rd largest journalist jailer</b>, imprisoning 205 journalists and media workers. The total number of China's attacks towards journalists is 211.</p>
                <p>Uighur publisher Abdurahman Abey has been detained at an undisclosed location since July 2018, accused of advocating separatism and religious extremism. His arrest is linked to his work at Xinjiang People’s Publishing House. Uighurs and other ethnic minorities in Xinjiang face cultural and religious repression, surveillance, arbitrary detention, and internment in mass camps.</p>
            `,
            location: {
                center: [101.89482, 31.22797],
                zoom: 4.67,
                pitch: 44.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Iran',
            alignment: 'left',
            hidden: false,
            title: 'Iran',
           // image: './path/to/image/source.png',
            description: `
                <p>Ranks 3rd, just above China, as the <b>2nd in the world for most imprisoned journalists, with 216 imprisonments</b> out of a total of 222 attacks.</p>
                <p>Iranian authorities arrested Kurdish Iranian photojournalist Adel Karimi on October 11, 2022, during a crackdown on protests following Mahsa Amini's death. Amini, a 22-year-old woman, died from injuries sustained after being beaten by morality police for allegedly wearing her hijab improperly.</p>
                `,
            location: {
                center: [54.41342, 32.28507],
                zoom: 5.36,
                pitch: 17.01,
                bearing: 78.21
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'iraq',
            alignment: 'right',
            hidden: false,
            title: 'Iraq',
            //image: './path/to/image/source.png',
            description: `
                <p>Ranks 2nd by the total number of 309 attacks, but ranks <b>fourth in the world for missing journalists with 9 cases </b>,
                and <b>first in the killings category with 283 cases</b>.
                <p>Adel Sayegh, an Iraqi photographer from Mosul, was kidnapped and executed by Islamic State members in August 2015. He was shot in the head in a public square, and his body was later buried without a funeral​. This type of incidents are not uncommon among journalists and media workers in Iraq.</p>
            `,
            location: {
                center: [41.94324, 32.04814],
                zoom: 7.17,
                pitch: 0.50,
                bearing: 141.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Turkey',
            alignment: 'left',
            hidden: false,
            title: 'Turkey',
           // image: './path/to/image/source.png',
            description: `
                <p>Ranks first with a total of 413 attacks. This ranking is not surprising, considering that Turkey <b>has the most imprisoned journalists in the world, with <u>382 cases</u></b>.</p>
                <p>Abdurrahman Öncü, a camera operator for PEL Production Company, was among 15 Kurdish journalists detained by police in Diyarbakır in June 2022 and jailed without charge pending trial. Öncü, initially a night watchman, transitioned to a news camera operator, producing Kurdish-focused content that led to his detention amid a police raid targeting journalists.</p>    
            `,
            location: {
                center: [34.69036, 39.28854],
                zoom: 6.18,
                pitch: 9.50,
                bearing: -9.13
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback:  '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'closing',
            alignment: 'fully',
            hidden: false,
            title: 'Protection of Journalists',
           // image: 'screenshot.png',
            description: `
                <p>The statistics presented highlight the urgent need for increased protection of journalists and media workers. 
                With the rising number of attacks such as imprisonments, killings and cases of missing journalists, it is crucial to ensure their safety and freedom to report. 
                Journalists facing threats can seek help from organizations like the <a href="https://cpj.org/?gad_source=1&gclid=Cj0KCQjwh7K1BhCZARIsAKOrVqGzGdeXve6pGSN3_FdWy05suSvjicF49v19gb49NRpEwcLyxGrjEFEaAkZnEALw_wcB"> Committee to Protect Journalists (CPJ)</a>, 
                <a href="https://rsf.org/en">Reporters Without Borders (RSF)</a>, and the 
                <a href="https://www.ifj.org/">International Federation of Journalists (IFJ)</a>. 
                These organizations offer resources, support, and advocacy for press freedom and the safety of media professionals. 
                The continued efforts of these entities are vital in upholding the rights and safety of journalists worldwide.</p>    
            `,
            location: {
                center: [19.07994, 22.19165],
                zoom: 1.50,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
            ]
        },
    ]
};

