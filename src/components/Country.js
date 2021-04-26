function Country(props) {

    const currentCountry = props.country

    const getCountry = () => {


        switch (currentCountry) {
            case "AF":
                return "Afghanistan"
            case "AL":
                return "Albania"
            case "DZ":
                return "Algeria"
            case "AS":
                return "American Samoa"
            case "AD":
                return "Andorra"
            case "AO":
                return "Angola"
            case "AI":
                return "Anguilla"
            case "AQ":
                return "Antarctica"
            case "AG":
                return "Antigua and Barbuda"
            case "AR":
                return "Argentina"
            case "AM":
                return "Armenia"
            case "AW":
                return "Aruba"
            case "AU":
                return "Australia"
            case "AT":
                return "Austria"
            case "AZ":
                return "Azerbaijan"
            case "BS":
                return "Bahamas "
            case "BH":
                return "Bahrain"
            case "BD":
                return "Bangladesh"
            case "BB":
                return "Barbados"
            case "BY":
                return "Belarus"
            case "BE":
                return "Belgium"
            case "BZ":
                return "Belize"
            case "BJ":
                return "Benin"
            case "BM":
                return "Bermuda"
            case "BT":
                return "Bhutan"
            case "BO":
                return "Bolivia (Plurinational State of)"
            case "BQ":
                return "Bonaire Sint Eustatius and Saba"
            case "BA":
                return "Bosnia and Herzegovina"
            case "BW":
                return "Botswana"
            case "BV":
                return "Bouvet Island"
            case "BR":
                return "Brazil"
            case "IO":
                return "British Indian Ocean Territory "
            case "BN":
                return "Brunei Darussalam"
            case "BG":
                return "Bulgaria"
            case "BF":
                return "Burkina Faso"
            case "BI":
                return "Burundi"
            case "CV":
                return "Cabo Verde"
            case "KH":
                return "Cambodia"
            case "CM":
                return "Cameroon"
            case "CA":
                return "Canada"
            case "KY":
                return "Cayman Islands "
            case "CF":
                return "Central African Republic "
            case "TD":
                return "Chad"
            case "CL":
                return "Chile"
            case "CN":
                return "China"
            case "CX":
                return "Christmas Island"
            case "CC":
                return "Cocos (Keeling) Islands "
            case "CO":
                return "Colombia"
            case "KM":
                return "Comoros "
            case "CD":
                return "Congo (the Democratic Republic of the)"
            case "CG":
                return "Congo "
            case "CK":
                return "Cook Islands "
            case "CR":
                return "Costa Rica"
            case "HR":
                return "Croatia"
            case "CU":
                return "Cuba"
            case "CW":
                return "Curaçao"
            case "CY":
                return "Cyprus"
            case "CZ":
                return "Czechia"
            case "CI":
                return "Côte d'Ivoire"
            case "DK":
                return "Denmark"
            case "DJ":
                return "Djibouti"
            case "DM":
                return "Dominica"
            case "DO":
                return "Dominican Republic "
            case "EC":
                return "Ecuador"
            case "EG":
                return "Egypt"
            case "SV":
                return "El Salvador"
            case "GQ":
                return "Equatorial Guinea"
            case "ER":
                return "Eritrea"
            case "EE":
                return "Estonia"
            case "SZ":
                return "Eswatini"
            case "ET":
                return "Ethiopia"
            case "FK":
                return "Falkland Islands  [Malvinas]"
            case "FO":
                return "Faroe Islands "
            case "FJ":
                return "Fiji"
            case "FI":
                return "Finland"
            case "FR":
                return "France"
            case "GF":
                return "French Guiana"
            case "PF":
                return "French Polynesia"
            case "TF":
                return "French Southern Territories "
            case "GA":
                return "Gabon"
            case "GM":
                return "Gambia "
            case "GE":
                return "Georgia"
            case "DE":
                return "Germany"
            case "GH":
                return "Ghana"
            case "GI":
                return "Gibraltar"
            case "GR":
                return "Greece"
            case "GL":
                return "Greenland"
            case "GD":
                return "Grenada"
            case "GP":
                return "Guadeloupe"
            case "GU":
                return "Guam"
            case "GT":
                return "Guatemala"
            case "GG":
                return "Guernsey"
            case "GN":
                return "Guinea"
            case "GW":
                return "Guinea-Bissau"
            case "GY":
                return "Guyana"
            case "HT":
                return "Haiti"
            case "HM":
                return "Heard Island and McDonald Islands"
            case "VA":
                return "Holy See "
            case "HN":
                return "Honduras"
            case "HK":
                return "Hong Kong"
            case "HU":
                return "Hungary"
            case "IS":
                return "Iceland"
            case "IN":
                return "India"
            case "ID":
                return "Indonesia"
            case "IR":
                return "Iran"
            case "IQ":
                return "Iraq"
            case "IE":
                return "Ireland"
            case "IM":
                return "Isle of Man"
            case "IL":
                return "Israel"
            case "IT":
                return "Italy"
            case "JM":
                return "Jamaica"
            case "JP":
                return "Japan"
            case "JE":
                return "Jersey"
            case "JO":
                return "Jordan"
            case "KZ":
                return "Kazakhstan"
            case "KE":
                return "Kenya"
            case "KI":
                return "Kiribati"
            case "KP":
                return "North Korea"
            case "KR":
                return "South Korea"
            case "KW":
                return "Kuwait"
            case "KG":
                return "Kyrgyzstan"
            case "LA":
                return "Laos"
            case "LV":
                return "Latvia"
            case "LB":
                return "Lebanon"
            case "LS":
                return "Lesotho"
            case "LR":
                return "Liberia"
            case "LY":
                return "Libya"
            case "LI":
                return "Liechtenstein"
            case "LT":
                return "Lithuania"
            case "LU":
                return "Luxembourg"
            case "MO":
                return "Macao"
            case "MG":
                return "Madagascar"
            case "MW":
                return "Malawi"
            case "MY":
                return "Malaysia"
            case "MV":
                return "Maldives"
            case "ML":
                return "Mali"
            case "MT":
                return "Malta"
            case "MH":
                return "Marshall Islands "
            case "MQ":
                return "Martinique"
            case "MR":
                return "Mauritania"
            case "MU":
                return "Mauritius"
            case "YT":
                return "Mayotte"
            case "MX":
                return "Mexico"
            case "FM":
                return "Micronesia"
            case "MD":
                return "Moldova"
            case "MC":
                return "Monaco"
            case "MN":
                return "Mongolia"
            case "ME":
                return "Montenegro"
            case "MS":
                return "Montserrat"
            case "MA":
                return "Morocco"
            case "MZ":
                return "Mozambique"
            case "MM":
                return "Myanmar"
            case "NA":
                return "Namibia"
            case "NR":
                return "Nauru"
            case "NP":
                return "Nepal"
            case "NL":
                return "Netherlands "
            case "NC":
                return "New Caledonia"
            case "NZ":
                return "New Zealand"
            case "NI":
                return "Nicaragua"
            case "NE":
                return "Niger "
            case "NG":
                return "Nigeria"
            case "NU":
                return "Niue"
            case "NF":
                return "Norfolk Island"
            case "MP":
                return "Northern Mariana Islands "
            case "NO":
                return "Norway"
            case "OM":
                return "Oman"
            case "PK":
                return "Pakistan"
            case "PW":
                return "Palau"
            case "PS":
                return "Palestine"
            case "PA":
                return "Panama"
            case "PG":
                return "Papua New Guinea"
            case "PY":
                return "Paraguay"
            case "PE":
                return "Peru"
            case "PH":
                return "Philippines "
            case "PN":
                return "Pitcairn"
            case "PL":
                return "Poland"
            case "PT":
                return "Portugal"
            case "PR":
                return "Puerto Rico"
            case "QA":
                return "Qatar"
            case "MK":
                return "Republic of North Macedonia"
            case "RO":
                return "Romania"
            case "RU":
                return "Russian Federation "
            case "RW":
                return "Rwanda"
            case "RE":
                return "Réunion"
            case "BL":
                return "Saint Barthélemy"
            case "SH":
                return "Saint Helena Ascension and Tristan da Cunha"
            case "KN":
                return "Saint Kitts and Nevis"
            case "LC":
                return "Saint Lucia"
            case "MF":
                return "Saint Martin (French part)"
            case "PM":
                return "Saint Pierre and Miquelon"
            case "VC":
                return "Saint Vincent and the Grenadines"
            case "WS":
                return "Samoa"
            case "SM":
                return "San Marino"
            case "ST":
                return "Sao Tome and Principe"
            case "SA":
                return "Saudi Arabia"
            case "SN":
                return "Senegal"
            case "RS":
                return "Serbia"
            case "SC":
                return "Seychelles"
            case "SL":
                return "Sierra Leone"
            case "SG":
                return "Singapore"
            case "SX":
                return "Sint Maarten (Dutch part)"
            case "SK":
                return "Slovakia"
            case "SI":
                return "Slovenia"
            case "SB":
                return "Solomon Islands"
            case "SO":
                return "Somalia"
            case "ZA":
                return "South Africa"
            case "GS":
                return "South Georgia and the South Sandwich Islands"
            case "SS":
                return "South Sudan"
            case "ES":
                return "Spain"
            case "LK":
                return "Sri Lanka"
            case "SD":
                return "Sudan "
            case "SR":
                return "Suriname"
            case "SJ":
                return "Svalbard"
            case "SE":
                return "Sweden"
            case "CH":
                return "Switzerland"
            case "SY":
                return "Syrian Arab Republic"
            case "TW":
                return "Taiwan"
            case "TJ":
                return "Tajikistan"
            case "TZ":
                return "Tanzania United Republic of"
            case "TH":
                return "Thailand"
            case "TL":
                return "Timor-Leste"
            case "TG":
                return "Togo"
            case "TK":
                return "Tokelau"
            case "TO":
                return "Tonga"
            case "TT":
                return "Trinidad and Tobago"
            case "TN":
                return "Tunisia"
            case "TR":
                return "Turkey"
            case "TM":
                return "Turkmenistan"
            case "TC":
                return "Turks and Caicos Islands "
            case "TV":
                return "Tuvalu"
            case "UG":
                return "Uganda"
            case "UA":
                return "Ukraine"
            case "AE":
                return "United Arab Emirates"
            case "GB":
                return "United Kingdom"
            case "UM":
                return "United States Minor Outlying Islands"
            case "US":
                return "United States of America"
            case "UY":
                return "Uruguay"
            case "UZ":
                return "Uzbekistan"
            case "VU":
                return "Vanuatu"
            case "VE":
                return "Venezuela"
            case "VN":
                return "Viet Nam"
            case "VG":
                return "Virgin Islands (British)"
            case "VI":
                return "Virgin Islands (U.S.)"
            case "WF":
                return "Wallis and Futuna"
            case "EH":
                return "Western Sahara"
            case "YE":
                return "Yemen"
            case "ZM":
                return "Zambia"
            case "ZW":
                return "Zimbabwe"
            case "AX":
                return "Åland Islands"
            default:
                return ""
        }
    }

    return (
        <>
            <h2 className="md:pt-20 pt-4 text-5xl">{getCountry()}</h2>
        </>
    )
}

export default Country