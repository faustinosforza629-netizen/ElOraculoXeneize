const matches = [
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Campeonato 2016",
        "rival": "Temperley",
        "stadium": "Banfield",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles en el debut"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Supercopa Argentina",
        "rival": "San Lorenzo",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 4,
        "scorer": "Dura derrota en Córdoba"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Campeonato 2016",
        "rival": "Atlético Tucumán",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en casa"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Campeonato 2016",
        "rival": "San Martín (SJ)",
        "stadium": "Bicentenario de San Juan",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Campeonato 2016",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Gol de Rodrigo Bentancur"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Cali",
        "stadium": "Palmaseca",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Colombia"
    },
    {
        "year": 2016,
        "month": "Febrero",
        "tournament": "Campeonato 2016",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Avellaneda"
    },
    {
        "year": 2016,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate copero sin goles"
    },
    {
        "year": 2016,
        "month": "Marzo",
        "tournament": "Campeonato 2016",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Superclásico sin goles"
    },
    {
        "year": 2016,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Bolívar",
        "stadium": "Hernando Siles",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de tiro libre de Federico Carrizo"
    },
    {
        "year": 2016,
        "month": "Marzo",
        "tournament": "Campeonato 2016",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Nicolás Lodeiro"
    },
    {
        "year": 2016,
        "month": "Marzo",
        "tournament": "Campeonato 2016",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Caída de visitante"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Campeonato 2016",
        "rival": "Atlético Rafaela",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Bolívar",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Fernando Gago"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Campeonato 2016",
        "rival": "Tigre",
        "stadium": "Coliseo de Victoria",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en Victoria"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Nicolás Lodeiro"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Campeonato 2016",
        "rival": "Aldosivi",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Doblete de Andrés Chávez"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Cali",
        "stadium": "La Bombonera",
        "bocaScore": 6,
        "rivalScore": 2,
        "scorer": "Doblete de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Campeonato 2016",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en La Paternal"
    },
    {
        "year": 2016,
        "month": "Abril",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Cerro Porteño",
        "stadium": "Defensores del Chaco",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Cerro Porteño",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Campeonato 2016",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Nacional",
        "stadium": "Gran Parque Central",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Frank Fabra"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Campeonato 2016",
        "rival": "Estudiantes LP",
        "stadium": "Ciudad de La Plata",
        "bocaScore": 1,
        "rivalScore": 3,
        "scorer": "Gol de Andrés Chávez"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Nacional",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Noche heroica de Orión"
    },
    {
        "year": 2016,
        "month": "Mayo",
        "tournament": "Campeonato 2016",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate para cerrar el torneo"
    },
    {
        "year": 2016,
        "month": "Junio",
        "tournament": "Copa Argentina",
        "rival": "Güemes (SdE)",
        "stadium": "Bicentenario de San Juan",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Cristian Pavón"
    },
    {
        "year": 2016,
        "month": "Julio",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Independiente del Valle",
        "stadium": "Olímpico Atahualpa",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Pablo Pérez"
    },
    {
        "year": 2016,
        "month": "Julio",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Independiente del Valle",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 3,
        "scorer": "Error insólito de Orión"
    },
    {
        "year": 2016,
        "month": "Agosto",
        "tournament": "Copa Argentina",
        "rival": "Santamarina",
        "stadium": "Antonio Romero (Formosa)",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2016,
        "month": "Agosto",
        "tournament": "Campeonato 2016/17",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en el inicio del torneo"
    },
    {
        "year": 2016,
        "month": "Septiembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Belgrano",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Septiembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Gino Peruzzi"
    },
    {
        "year": 2016,
        "month": "Septiembre",
        "tournament": "Copa Argentina",
        "rival": "Lanús",
        "stadium": "José María Minella",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Doblete de Carlos Tevez y triunfo por penales"
    },
    {
        "year": 2016,
        "month": "Septiembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Quilmes",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Hat-trick de Darío Benedetto"
    },
    {
        "year": 2016,
        "month": "Octubre",
        "tournament": "Campeonato 2016/17",
        "rival": "Tigre",
        "stadium": "Coliseo de Victoria",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Juan Manuel Insaurralde"
    },
    {
        "year": 2016,
        "month": "Octubre",
        "tournament": "Campeonato 2016/17",
        "rival": "Sarmiento",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Ricardo Centurión"
    },
    {
        "year": 2016,
        "month": "Octubre",
        "tournament": "Campeonato 2016/17",
        "rival": "Atlético Tucumán",
        "stadium": "Monumental José Fierro",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Doblete de Cristian Pavón"
    },
    {
        "year": 2016,
        "month": "Octubre",
        "tournament": "Campeonato 2016/17",
        "rival": "Temperley",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Gol de Gino Peruzzi"
    },
    {
        "year": 2016,
        "month": "Noviembre",
        "tournament": "Copa Argentina",
        "rival": "Rosario Central",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2016,
        "month": "Noviembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Gimnasia LP",
        "stadium": "Juan Carmelo Zerillo",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2016,
        "month": "Noviembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Rosario Central",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Partido con polémica con Teo Guttiérrez"
    },
    {
        "year": 2016,
        "month": "Noviembre",
        "tournament": "Campeonato 2016/17",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2016,
        "month": "Diciembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Doblete de Walter Bou"
    },
    {
        "year": 2016,
        "month": "Diciembre",
        "tournament": "Campeonato 2016/17",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Memorable doblete de Carlos Tevez"
    },
    {
        "year": 2016,
        "month": "Diciembre",
        "tournament": "Campeonato 2016/17",
        "rival": "Colón",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Último partido de Tevez antes de irse a China"
    },
    {
        "year": 2017,
        "month": "Marzo",
        "tournament": "Campeonato 2016/17",
        "rival": "Banfield",
        "stadium": "Florencio Sola",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Marzo",
        "tournament": "Campeonato 2016/17",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Oscar Benítez"
    },
    {
        "year": 2017,
        "month": "Marzo",
        "tournament": "Campeonato 2016/17",
        "rival": "San Martín (SJ)",
        "stadium": "Bicentenario de San Juan",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2017,
        "month": "Abril",
        "tournament": "Campeonato 2016/17",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Abril",
        "tournament": "Campeonato 2016/17",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Abril",
        "tournament": "Campeonato 2016/17",
        "rival": "Patronato",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Abril",
        "tournament": "Campeonato 2016/17",
        "rival": "Atlético Rafaela",
        "stadium": "Nuevo Monumental",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2017,
        "month": "Abril",
        "tournament": "Campeonato 2016/17",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Mayo",
        "tournament": "Campeonato 2016/17",
        "rival": "Estudiantes LP",
        "stadium": "Ciudad de La Plata",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2017,
        "month": "Mayo",
        "tournament": "Campeonato 2016/17",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 3,
        "scorer": "Gol de Fernando Gago"
    },
    {
        "year": 2017,
        "month": "Mayo",
        "tournament": "Campeonato 2016/17",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Mayo",
        "tournament": "Campeonato 2016/17",
        "rival": "Huracán",
        "stadium": "Tomás Adolfo Ducó",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Junio",
        "tournament": "Campeonato 2016/17",
        "rival": "Independiente",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Junio",
        "tournament": "Campeonato 2016/17",
        "rival": "Aldosivi",
        "stadium": "José María Minella",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2017,
        "month": "Junio",
        "tournament": "Campeonato 2016/17",
        "rival": "Olimpo",
        "stadium": "Roberto Carminatti",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Ricardo Centurión (Partido del campeonato)"
    },
    {
        "year": 2017,
        "month": "Junio",
        "tournament": "Campeonato 2016/17",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Agosto",
        "tournament": "Copa Argentina",
        "rival": "Gimnasia y Tiro",
        "stadium": "Antonio Romero (Formosa)",
        "bocaScore": 5,
        "rivalScore": 0,
        "scorer": "Gol de Edwin Cardona"
    },
    {
        "year": 2017,
        "month": "Agosto",
        "tournament": "Superliga 2017/18",
        "rival": "Olimpo",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Septiembre",
        "tournament": "Copa Argentina",
        "rival": "Guillermo Brown",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Septiembre",
        "tournament": "Superliga 2017/18",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Septiembre",
        "tournament": "Superliga 2017/18",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Doblete de Pablo Pérez"
    },
    {
        "year": 2017,
        "month": "Septiembre",
        "tournament": "Copa Argentina",
        "rival": "Rosario Central",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota y eliminación"
    },
    {
        "year": 2017,
        "month": "Septiembre",
        "tournament": "Superliga 2017/18",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Octubre",
        "tournament": "Superliga 2017/18",
        "rival": "Chacarita",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2017,
        "month": "Octubre",
        "tournament": "Superliga 2017/18",
        "rival": "Patronato",
        "stadium": "Presbítero Bartolomé Grella",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2017,
        "month": "Octubre",
        "tournament": "Superliga 2017/18",
        "rival": "Belgrano",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2017,
        "month": "Noviembre",
        "tournament": "Superliga 2017/18",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Golazo de tiro libre de Edwin Cardona"
    },
    {
        "year": 2017,
        "month": "Noviembre",
        "tournament": "Superliga 2017/18",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Darío Benedetto (Lesión de LCA de Benedetto)"
    },
    {
        "year": 2017,
        "month": "Noviembre",
        "tournament": "Superliga 2017/18",
        "rival": "Rosario Central",
        "stadium": "Gigante de Arroyito",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota de visitante"
    },
    {
        "year": 2017,
        "month": "Diciembre",
        "tournament": "Superliga 2017/18",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Guido Vadalá"
    },
    {
        "year": 2017,
        "month": "Diciembre",
        "tournament": "Superliga 2017/18",
        "rival": "Estudiantes LP",
        "stadium": "Centenario Ciudad de Quilmes",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Wilmar Barrios convierte su único gol con Boca"
    },
    {
        "year": 2018,
        "month": "Enero",
        "tournament": "Superliga 2017/18",
        "rival": "Colón",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Nahitan Nández"
    },
    {
        "year": 2018,
        "month": "Febrero",
        "tournament": "Superliga 2017/18",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2018,
        "month": "Febrero",
        "tournament": "Superliga 2017/18",
        "rival": "Temperley",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Frank Fabra"
    },
    {
        "year": 2018,
        "month": "Febrero",
        "tournament": "Superliga 2017/18",
        "rival": "San Martín (SJ)",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2018,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Alianza Lima",
        "stadium": "Estadio Nacional (Lima)",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate copero sin goles"
    },
    {
        "year": 2018,
        "month": "Marzo",
        "tournament": "Superliga 2017/18",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en La Paternal"
    },
    {
        "year": 2018,
        "month": "Marzo",
        "tournament": "Superliga 2017/18",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Agónico gol de Leonardo Jara sobre el final"
    },
    {
        "year": 2018,
        "month": "Marzo",
        "tournament": "Supercopa Argentina",
        "rival": "River Plate",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Final perdida en Mendoza con penal inexistente"
    },
    {
        "year": 2018,
        "month": "Marzo",
        "tournament": "Superliga 2017/18",
        "rival": "Atlético Tucumán",
        "stadium": "Monumental José Fierro",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Walter Bou"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Junior",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Superliga 2017/18",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Pablo Pérez y polémica con la hinchada"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Superliga 2017/18",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota en casa"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Palmeiras",
        "stadium": "Allianz Parque",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Superliga 2017/18",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en Avellaneda"
    },
    {
        "year": 2018,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Palmeiras",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Dura derrota copera en casa"
    },
    {
        "year": 2018,
        "month": "Mayo",
        "tournament": "Superliga 2017/18",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Doblete de Ramón Wanchope Ábila"
    },
    {
        "year": 2018,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Junior",
        "stadium": "Metropolitano Roberto Meléndez",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": " Casi blooper histórico de Rossi"
    },
    {
        "year": 2018,
        "month": "Mayo",
        "tournament": "Superliga 2017/18",
        "rival": "Gimnasia LP",
        "stadium": "Juan Carmelo Zerillo",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Boca bicampeón con gol de Wanchope"
    },
    {
        "year": 2018,
        "month": "Mayo",
        "tournament": "Superliga 2017/18",
        "rival": "Huracán",
        "stadium": "Tomás Adolfo Ducó",
        "bocaScore": 3,
        "rivalScore": 3,
        "scorer": "Partidazo de campeón 11 a.m."
    },
    {
        "year": 2018,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Alianza Lima",
        "stadium": "La Bombonera",
        "bocaScore": 5,
        "rivalScore": 0,
        "scorer": "Doblete de Ramón Wanchope Ábila"
    },
    {
        "year": 2018,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Libertad",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2018,
        "month": "Agosto",
        "tournament": "Superliga 2018/19",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2018,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Libertad",
        "stadium": "Defensores del Chaco",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2018,
        "month": "Agosto",
        "tournament": "Superliga 2018/19",
        "rival": "Huracán",
        "stadium": "Tomás Adolfo Ducó",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Parque Patricios"
    },
    {
        "year": 2018,
        "month": "Septiembre",
        "tournament": "Superliga 2018/19",
        "rival": "Vélez Sarsfield",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2018,
        "month": "Septiembre",
        "tournament": "Superliga 2018/19",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Izquierdoz"
    },
    {
        "year": 2018,
        "month": "Septiembre",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Cruzeiro",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": " Lesión de mandibula de Andrada"
    },
    {
        "year": 2018,
        "month": "Septiembre",
        "tournament": "Superliga 2018/19",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en el Superclásico local"
    },
    {
        "year": 2018,
        "month": "Septiembre",
        "tournament": "Copa Argentina",
        "rival": "Gimnasia LP",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Eliminación del torneo"
    },
    {
        "year": 2018,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Cruzeiro",
        "stadium": "Mineirão",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Pavón sobre el final"
    },
    {
        "year": 2018,
        "month": "Octubre",
        "tournament": "Superliga 2018/19",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2018,
        "month": "Octubre",
        "tournament": "Superliga 2018/19",
        "rival": "Rosario Central",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2018,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Palmeiras",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete memorable de Darío Benedetto"
    },
    {
        "year": 2018,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Palmeiras",
        "stadium": "Allianz Parque",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Goles de Benedetto y Wanchope"
    },
    {
        "year": 2018,
        "month": "Noviembre",
        "tournament": "Superliga 2018/19",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Doblete de Carlos Tevez"
    },
    {
        "year": 2018,
        "month": "Noviembre",
        "tournament": "Copa Libertadores (Final Ida)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Goles de Wanchope y Benedetto"
    },
    {
        "year": 2018,
        "month": "Noviembre",
        "tournament": "Superliga 2018/19",
        "rival": "Patronato",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Espinoza"
    },
    {
        "year": 2018,
        "month": "Diciembre",
        "tournament": "Superliga 2018/19",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Edwin Cardona"
    },
    {
        "year": 2018,
        "month": "Diciembre",
        "tournament": "Copa Libertadores (Final Vuelta)",
        "rival": "River Plate",
        "stadium": "Santiago Bernabéu",
        "bocaScore": 1,
        "rivalScore": 3,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2019,
        "month": "Enero",
        "tournament": "Superliga 2018/19",
        "rival": "Newell's",
        "stadium": "Coloso del Parque",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2019,
        "month": "Enero",
        "tournament": "Superliga 2018/19",
        "rival": "San Martín (SJ)",
        "stadium": "Bicentenario de San Juan",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2019,
        "month": "Febrero",
        "tournament": "Superliga 2018/19",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2019,
        "month": "Febrero",
        "tournament": "Superliga 2018/19",
        "rival": "Belgrano",
        "stadium": "Julio César Villagra",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Lisandro López"
    },
    {
        "year": 2019,
        "month": "Febrero",
        "tournament": "Superliga 2018/19",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2019,
        "month": "Febrero",
        "tournament": "Superliga 2018/19",
        "rival": "Defensa y Justicia",
        "stadium": "Norberto Tomaghello",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Superliga 2018/19",
        "rival": "Unión",
        "stadium": "15 de Abril",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Jorge Wilstermann",
        "stadium": "Félix Capriles",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate copero en la altura"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Superliga 2018/19",
        "rival": "San Lorenzo",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Deportes Tolima",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Superliga 2018/19",
        "rival": "San Martín (T)",
        "stadium": "La Ciudadela",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Golazo de Bebelo Reynoso"
    },
    {
        "year": 2019,
        "month": "Marzo",
        "tournament": "Superliga 2018/19",
        "rival": "Banfield",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Athletico Paranaense",
        "stadium": "Arena da Baixada",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Dura derrota en Brasil"
    },
    {
        "year": 2019,
        "month": "Abril",
        "tournament": "Superliga 2018/19",
        "rival": "Aldosivi",
        "stadium": "José María Minella",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2019,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Jorge Wilstermann",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2019,
        "month": "Abril",
        "tournament": "Copa de la Superliga",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Pavón"
    },
    {
        "year": 2019,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Deportes Tolima",
        "stadium": "Manuel Murillo Toro",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa de la Superliga",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Supercopa Argentina",
        "rival": "Rosario Central",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Campeones por penales"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Athletico Paranaense",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol agónico de Carlos Tevez"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa de la Superliga",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa de la Superliga",
        "rival": "Vélez Sarsfield",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "\"Pasó el equipo grande\""
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa de la Superliga",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en La Paternal"
    },
    {
        "year": 2019,
        "month": "Mayo",
        "tournament": "Copa de la Superliga",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Lisandro López"
    },
    {
        "year": 2019,
        "month": "Junio",
        "tournament": "Copa de la Superliga (Final)",
        "rival": "Tigre",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en la final"
    },
    {
        "year": 2019,
        "month": "Julio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Athletico Paranaense",
        "stadium": "Arena da Baixada",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Golazo de Alexis Mac Allister"
    },
    {
        "year": 2019,
        "month": "Julio",
        "tournament": "Superliga 2019/20",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en el debut"
    },
    {
        "year": 2019,
        "month": "Julio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Athletico Paranaense",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Agosto",
        "tournament": "Superliga 2019/20",
        "rival": "Patronato",
        "stadium": "Presbítero Bartolomé Grella",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Eduardo Salvio"
    },
    {
        "year": 2019,
        "month": "Agosto",
        "tournament": "Superliga 2019/20",
        "rival": "Aldosivi",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2019,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "LDU Quito",
        "stadium": "Rodrigo Paz Delgado",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Golazo de tiro libre de Bebelo"
    },
    {
        "year": 2019,
        "month": "Agosto",
        "tournament": "Superliga 2019/20",
        "rival": "Banfield",
        "stadium": "Florencio Sola",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Franco Soldano"
    },
    {
        "year": 2019,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "LDU Quito",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate y pase a semis"
    },
    {
        "year": 2019,
        "month": "Septiembre",
        "tournament": "Superliga 2019/20",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Soldano de 8"
    },
    {
        "year": 2019,
        "month": "Septiembre",
        "tournament": "Superliga 2019/20",
        "rival": "Estudiantes LP",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Emanuel Reynoso"
    },
    {
        "year": 2019,
        "month": "Septiembre",
        "tournament": "Superliga 2019/20",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Lisandro López"
    },
    {
        "year": 2019,
        "month": "Septiembre",
        "tournament": "Superliga 2019/20",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Izquierdoz"
    },
    {
        "year": 2019,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en la ida"
    },
    {
        "year": 2019,
        "month": "Octubre",
        "tournament": "Superliga 2019/20",
        "rival": "Defensa y Justicia",
        "stadium": "Norberto Tomaghello",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Agustín Almendra"
    },
    {
        "year": 2019,
        "month": "Octubre",
        "tournament": "Superliga 2019/20",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída de local"
    },
    {
        "year": 2019,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Jan Hurtado"
    },
    {
        "year": 2019,
        "month": "Octubre",
        "tournament": "Superliga 2019/20",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2019,
        "month": "Noviembre",
        "tournament": "Superliga 2019/20",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 5,
        "rivalScore": 1,
        "scorer": "Domingo 11am con gol de chilena de Tévez"
    },
    {
        "year": 2019,
        "month": "Noviembre",
        "tournament": "Superliga 2019/20",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Liniers"
    },
    {
        "year": 2019,
        "month": "Noviembre",
        "tournament": "Superliga 2019/20",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Noviembre",
        "tournament": "Superliga 2019/20",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2019,
        "month": "Diciembre",
        "tournament": "Superliga 2019/20",
        "rival": "Rosario Central",
        "stadium": "Gigante de Arroyito",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Cierre de año con derrota"
    },
    {
        "year": 2020,
        "month": "Enero",
        "tournament": "Superliga 2019/20",
        "rival": "Independiente",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate clásico sin goles"
    },
    {
        "year": 2020,
        "month": "Febrero",
        "tournament": "Superliga 2019/20",
        "rival": "Talleres",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Goles de Villa y Tevez"
    },
    {
        "year": 2020,
        "month": "Febrero",
        "tournament": "Superliga 2019/20",
        "rival": "Atlético Tucumán",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Franco Soldano"
    },
    {
        "year": 2020,
        "month": "Febrero",
        "tournament": "Superliga 2019/20",
        "rival": "Central Córdoba",
        "stadium": "Alfredo Terrera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Carlos Tevez"
    },
    {
        "year": 2020,
        "month": "Febrero",
        "tournament": "Superliga 2019/20",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2020,
        "month": "Febrero",
        "tournament": "Superliga 2019/20",
        "rival": "Colón",
        "stadium": "Brigadier Estanislao López",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Golazo de tijera de Wanchope"
    },
    {
        "year": 2020,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Caracas",
        "stadium": "Olímpico de la UCV",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2020,
        "month": "Marzo",
        "tournament": "Superliga 2019/20",
        "rival": "Gimnasia LP",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Tevez y campeonato histórico"
    },
    {
        "year": 2020,
        "month": "Marzo",
        "tournament": "Copa Libertadores",
        "rival": "Independiente Medellín",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Eduardo Salvio"
    },
    {
        "year": 2020,
        "month": "Marzo",
        "tournament": "Copa de la Superliga",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Gol de Salvio"
    },
    {
        "year": 2020,
        "month": "Septiembre",
        "tournament": "Copa Libertadores",
        "rival": "Libertad",
        "stadium": "General Pablo Rojas",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete de Eduardo Salvio"
    },
    {
        "year": 2020,
        "month": "Septiembre",
        "tournament": "Copa Libertadores",
        "rival": "Independiente Medellín",
        "stadium": "Atanasio Girardot",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Eduardo Salvio"
    },
    {
        "year": 2020,
        "month": "Septiembre",
        "tournament": "Copa Libertadores",
        "rival": "Libertad",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2020,
        "month": "Octubre",
        "tournament": "Copa Libertadores",
        "rival": "Caracas",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Carlos Tevez"
    },
    {
        "year": 2020,
        "month": "Octubre",
        "tournament": "Copa Diego Maradona",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2020,
        "month": "Noviembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Newell's",
        "stadium": "Coloso del Parque",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2020,
        "month": "Noviembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en casa"
    },
    {
        "year": 2020,
        "month": "Noviembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2020,
        "month": "Noviembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete de Edwin Cardona"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Internacional",
        "stadium": "Beira-Rio",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez y dedicatoria a Diego"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Talleres",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Córdoba"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Internacional",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Pase heroico por penales"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Diego González"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Avellaneda"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol agónico de Edwin Cardona"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Goles de Salvio y Villa"
    },
    {
        "year": 2020,
        "month": "Diciembre",
        "tournament": "Copa Diego Maradona",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Doblete de Ramón Wanchope Ábila"
    },
    {
        "year": 2021,
        "month": "Enero",
        "tournament": "Copa Diego Maradona",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Goles de Ábila y Villa"
    },
    {
        "year": 2021,
        "month": "Enero",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Santos",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate cerrado"
    },
    {
        "year": 2021,
        "month": "Enero",
        "tournament": "Copa Diego Maradona",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Ramón Wanchope Ábila"
    },
    {
        "year": 2021,
        "month": "Enero",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Santos",
        "stadium": "Vila Belmiro",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Dura eliminación"
    },
    {
        "year": 2021,
        "month": "Enero",
        "tournament": "Copa Diego Maradona (Final)",
        "rival": "Banfield",
        "stadium": "San Juan del Bicentenario",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Campeones de la Copa Maradona por penales"
    },
    {
        "year": 2021,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Gimnasia LP",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Edwin Cardona"
    },
    {
        "year": 2021,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Newell's",
        "stadium": "Coloso del Parque",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Izquierdoz"
    },
    {
        "year": 2021,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Sarmiento",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Lisandro López"
    },
    {
        "year": 2021,
        "month": "Marzo",
        "tournament": "Copa Argentina",
        "rival": "Claypole",
        "stadium": "Ciudad de Lanús",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2021,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 7,
        "rivalScore": 1,
        "scorer": "Goleada histórica con doblete de Villa"
    },
    {
        "year": 2021,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2021,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota en casa"
    },
    {
        "year": 2021,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Zambrano"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Mauro Zárate"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Unión",
        "stadium": "15 de Abril",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en Santa Fe"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Atlético Tucumán",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Franco Soldano"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "The Strongest",
        "stadium": "Hernando Siles",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Huracán",
        "stadium": "Tomás Adolfo Ducó",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Franco Soldano"
    },
    {
        "year": 2021,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Santos",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Tevez"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa de la Liga",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Carlos Izquierdoz"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Barcelona SC",
        "stadium": "Monumental Banco Pichincha",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en Guayaquil"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa de la Liga",
        "rival": "Patronato",
        "stadium": "Presbítero Bartolomé Grella",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Paraná"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Santos",
        "stadium": "Vila Belmiro",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota por la mínima"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa de la Liga (Cuartos)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Tevez y pase por penales"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Barcelona SC",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "The Strongest",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Agustín Almendra"
    },
    {
        "year": 2021,
        "month": "Mayo",
        "tournament": "Copa de la Liga (Semifinal)",
        "rival": "Racing Club",
        "stadium": "San Juan del Bicentenario",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Eliminación por penales"
    },
    {
        "year": 2021,
        "month": "Julio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Atlético Mineiro",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate polémico"
    },
    {
        "year": 2021,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Unión",
        "stadium": "15 de Abril",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Agustín Obando"
    },
    {
        "year": 2021,
        "month": "Julio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Atlético Mineiro",
        "stadium": "Mineirão",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Eliminación por penales"
    },
    {
        "year": 2021,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Banfield",
        "stadium": "Florencio Sola",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Los pibes empataron en el Sur"
    },
    {
        "year": 2021,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "San Lorenzo",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota de local"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Talleres",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Copa Argentina",
        "rival": "River Plate",
        "stadium": "Ciudad de La Plata",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Triunfo por penales en el Superclásico"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Miguel Ángel Russo"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Estudiantes LP",
        "stadium": "José Luis Hirschi",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en La Plata"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Patronato",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Platense",
        "stadium": "Ciudad de Vicente López",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Norberto Briasco"
    },
    {
        "year": 2021,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate de local"
    },
    {
        "year": 2021,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Rosario Central",
        "stadium": "Gigante de Arroyito",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2021,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin tantos"
    },
    {
        "year": 2021,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Atlético Tucumán",
        "stadium": "Monumental José Fierro",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Lisandro López"
    },
    {
        "year": 2021,
        "month": "Septiembre",
        "tournament": "Copa Argentina (Cuartos)",
        "rival": "Patronato",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Pase por penales"
    },
    {
        "year": 2021,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Colón",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Nicolás Orsini"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Carlos Zambrano"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Doblete de Luis Vázquez"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Huracán",
        "stadium": "Tomás Adolfo Ducó",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Agustín Almendra"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Frank Fabra"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en Liniers"
    },
    {
        "year": 2021,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Gimnasia LP",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en casa"
    },
    {
        "year": 2021,
        "month": "Noviembre",
        "tournament": "Copa Argentina (Semifinal)",
        "rival": "Argentinos Juniors",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2021,
        "month": "Noviembre",
        "tournament": "Liga Profesional",
        "rival": "Aldosivi",
        "stadium": "José María Minella",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2021,
        "month": "Noviembre",
        "tournament": "Liga Profesional",
        "rival": "Sarmiento",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2021,
        "month": "Noviembre",
        "tournament": "Liga Profesional",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Avellaneda"
    },
    {
        "year": 2021,
        "month": "Noviembre",
        "tournament": "Liga Profesional",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate de local"
    },
    {
        "year": 2021,
        "month": "Diciembre",
        "tournament": "Liga Profesional",
        "rival": "Arsenal",
        "stadium": "Julio Humberto Grondona",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Juan Ramírez"
    },
    {
        "year": 2021,
        "month": "Diciembre",
        "tournament": "Copa Argentina (Final)",
        "rival": "Talleres",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Campeones de Copa Argentina por penales"
    },
    {
        "year": 2021,
        "month": "Diciembre",
        "tournament": "Liga Profesional",
        "rival": "Central Córdoba",
        "stadium": "La Bombonera",
        "bocaScore": 8,
        "rivalScore": 1,
        "scorer": "Goleada monumental para cerrar el año"
    },
    {
        "year": 2022,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Colón",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Aldosivi",
        "stadium": "José María Minella",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Rosario Central",
        "stadium": "José Amalfitani",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Carlos Izquierdoz"
    },
    {
        "year": 2022,
        "month": "Febrero",
        "tournament": "Copa de la Liga",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Marzo",
        "tournament": "Copa Argentina",
        "rival": "Central Córdoba (R)",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Gol de Nicolás Orsini"
    },
    {
        "year": 2022,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en casa"
    },
    {
        "year": 2022,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "Estudiantes LP",
        "stadium": "José Luis Hirschi",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luis Advíncula"
    },
    {
        "year": 2022,
        "month": "Marzo",
        "tournament": "Copa de la Liga",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Golazo con la camiseta amarilla de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Cali",
        "stadium": "Palmaseca",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Debut con derrota en la Copa para Boca"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Liniers"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Always Ready",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Central Córdoba",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Eduardo Salvio"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Corinthians",
        "stadium": "Neo Química Arena",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en Brasil"
    },
    {
        "year": 2022,
        "month": "Abril",
        "tournament": "Copa de la Liga",
        "rival": "Barracas Central",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Always Ready",
        "stadium": "Hernando Siles",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Eduardo Salvio"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa de la Liga",
        "rival": "Tigre",
        "stadium": "Coliseo de Victoria",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa de la Liga (Cuartos)",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa de la Liga (Semifinal)",
        "rival": "Racing Club",
        "stadium": "Ciudad de Lanús",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Pase a la final por penales"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Corinthians",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa de la Liga (Final)",
        "rival": "Tigre",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Goles de Rojo y Fabra. ¡Campeones!"
    },
    {
        "year": 2022,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Cali",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Alan Varela y pase a octavos"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Arsenal",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Copa Argentina",
        "rival": "Ferro",
        "stadium": "Carlos Augusto Mercado Luna",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Central Córdoba",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota visitante"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 5,
        "rivalScore": 3,
        "scorer": "Doblete de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Barracas Central",
        "stadium": "Islas Malvinas (All Boys)",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Sebastián Villa"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Caída en casa"
    },
    {
        "year": 2022,
        "month": "Junio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Corinthians",
        "stadium": "Neo Química Arena",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate cerrado"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Banfield",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Derrota con suplentes"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Corinthians",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Dura eliminación por penales"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Marcos Rojo"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Talleres",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Marcos Rojo"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota de visitante"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Estudiantes LP",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Guillermo Fernández"
    },
    {
        "year": 2022,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Patronato",
        "stadium": "Presbítero Bartolomé Grella",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Derrota en Paraná"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Platense",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Óscar Romero"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Copa Argentina",
        "rival": "Agropecuario",
        "stadium": "Padre Ernesto Martearena",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Guillermo Fernández"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en el clásico"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Rosario Central",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Nuevo empate sin goles"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Defensa y Justicia",
        "stadium": "Norberto Tomaghello",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol agónico de Luis Vázquez"
    },
    {
        "year": 2022,
        "month": "Agosto",
        "tournament": "Liga Profesional",
        "rival": "Atlético Tucumán",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Doblete de Luca Langoni"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Colón",
        "stadium": "Brigadier Estanislao López",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Luca Langoni"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol inolvidable de Darío Benedetto al alambrado"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Lanús",
        "stadium": "La Fortaleza",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate de local"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Liga Profesional",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luca Langoni"
    },
    {
        "year": 2022,
        "month": "Septiembre",
        "tournament": "Copa Argentina (Cuartos)",
        "rival": "Quilmes",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 3,
        "rivalScore": 2,
        "scorer": "Gol de Gonzalo Morales"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Vélez Sarsfield",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Gonzalo Morales"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Aldosivi",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Sarmiento",
        "stadium": "Eva Perón",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luca Langoni"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Newell's",
        "stadium": "Coloso del Parque",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota antes del final"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Gimnasia LP",
        "stadium": "Juan Carmelo Zerillo",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Frank Fabra y Luca Langoni"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Liga Profesional",
        "rival": "Independiente",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Villa y título épico"
    },
    {
        "year": 2022,
        "month": "Octubre",
        "tournament": "Copa Argentina (Semifinal)",
        "rival": "Patronato",
        "stadium": "Bicentenario de San Juan",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Eliminación por penales"
    },
    {
        "year": 2022,
        "month": "Noviembre",
        "tournament": "Trofeo de Campeones",
        "rival": "Racing Club",
        "stadium": "Parque La Pedrera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota en el alargue con polémicas"
    },
    {
        "year": 2023,
        "month": "Enero",
        "tournament": "Supercopa Internacional",
        "rival": "Racing Club",
        "stadium": "Hazza bin Zayed",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Facundo Roncaglia"
    },
    {
        "year": 2023,
        "month": "Febrero",
        "tournament": "Liga Profesional",
        "rival": "Atlético Tucumán",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Óscar Romero"
    },
    {
        "year": 2023,
        "month": "Febrero",
        "tournament": "Liga Profesional",
        "rival": "Central Córdoba",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2023,
        "month": "Febrero",
        "tournament": "Liga Profesional",
        "rival": "Talleres",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Luca Langoni"
    },
    {
        "year": 2023,
        "month": "Febrero",
        "tournament": "Liga Profesional",
        "rival": "Platense",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Nicolás Figal"
    },
    {
        "year": 2023,
        "month": "Febrero",
        "tournament": "Liga Profesional",
        "rival": "Vélez Sarsfield",
        "stadium": "José Amalfitani",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Luca Langoni"
    },
    {
        "year": 2023,
        "month": "Marzo",
        "tournament": "Supercopa Argentina",
        "rival": "Patronato",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Triplete de Darío Benedetto"
    },
    {
        "year": 2023,
        "month": "Marzo",
        "tournament": "Liga Profesional",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate de local"
    },
    {
        "year": 2023,
        "month": "Marzo",
        "tournament": "Liga Profesional",
        "rival": "Banfield",
        "stadium": "Florencio Sola",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en el Sur"
    },
    {
        "year": 2023,
        "month": "Marzo",
        "tournament": "Liga Profesional",
        "rival": "Instituto",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 3,
        "scorer": "Gol de Martín Payero"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Liga Profesional",
        "rival": "Colón",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Óscar Romero"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Monagas",
        "stadium": "Monumental de Maturín",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Venezuela"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Liga Profesional",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en el clásico"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Liga Profesional",
        "rival": "Estudiantes LP",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota con tijera agónica"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Pereira",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Golazo de Luis Advíncula"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Liga Profesional",
        "rival": "Rosario Central",
        "stadium": "Gigante de Arroyito",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Nicolás Figal"
    },
    {
        "year": 2023,
        "month": "Abril",
        "tournament": "Liga Profesional",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Martín Payero"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Colo-Colo",
        "stadium": "Monumental de Chile",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Golazo de Luis Advíncula"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Liga Profesional",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota polémica sobre el final"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Liga Profesional",
        "rival": "Belgrano",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Martín Payero"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Liga Profesional",
        "rival": "Argentinos Juniors",
        "stadium": "Diego Armando Maradona",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Copa Libertadores",
        "rival": "Deportivo Pereira",
        "stadium": "Hernán Ramírez Villegas",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Colombia"
    },
    {
        "year": 2023,
        "month": "Mayo",
        "tournament": "Liga Profesional",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Arsenal",
        "stadium": "Julio Humberto Grondona",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en Sarandí"
    },
    {
        "year": 2023,
        "month": "Junio",
        "tournament": "Copa Libertadores",
        "rival": "Colo-Colo",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Marcelo Weigandt"
    },
    {
        "year": 2023,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Darío Benedetto"
    },
    {
        "year": 2023,
        "month": "Junio",
        "tournament": "Liga Profesional",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 0,
        "rivalScore": 4,
        "scorer": "Dura derrota en Mendoza"
    },
    {
        "year": 2023,
        "month": "Junio",
        "tournament": "Copa Libertadores",
        "rival": "Monagas",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Doblete de Luis Vázquez"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Sarmiento",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Unión",
        "stadium": "15 de Abril",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate con polémica en el VAR"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Luis Vázquez"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Gimnasia LP",
        "stadium": "Juan Carmelo Zerillo",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Medina"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Copa Argentina",
        "rival": "Barracas Central",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Cristian Medina"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Valentín Barco"
    },
    {
        "year": 2023,
        "month": "Julio",
        "tournament": "Liga Profesional",
        "rival": "Independiente",
        "stadium": "Libertadores de América",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol de Exequiel Zeballos"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Nacional",
        "stadium": "Gran Parque Central",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Octavos)",
        "rival": "Nacional",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Gol de Merentiel y Advíncula"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa de la Liga",
        "rival": "Platense",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Golazo de Edinson Cavani"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate cerrado"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa de la Liga",
        "rival": "Sarmiento",
        "stadium": "Eva Perón",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota de visitante"
    },
    {
        "year": 2023,
        "month": "Agosto",
        "tournament": "Copa Libertadores (Cuartos)",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Chiquito Romero héroe en penales"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa de la Liga",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en casa"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa Argentina",
        "rival": "Almagro",
        "stadium": "Carlos Augusto Mercado Luna",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Triunfo por penales"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa de la Liga",
        "rival": "Defensa y Justicia",
        "stadium": "Norberto Tomaghello",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en Varela"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa de la Liga",
        "rival": "Central Córdoba",
        "stadium": "Único Madre de Ciudades",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Gol de Lucas Janson"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa de la Liga",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Lucas Janson"
    },
    {
        "year": 2023,
        "month": "Septiembre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Palmeiras",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Ida sin ventajas"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa de la Liga",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota clásica en casa"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa Libertadores (Semifinal)",
        "rival": "Palmeiras",
        "stadium": "Allianz Parque",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Cavani y pase a la final"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa de la Liga",
        "rival": "Belgrano",
        "stadium": "Julio César Villagra",
        "bocaScore": 3,
        "rivalScore": 4,
        "scorer": "Partidazo con derrota"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa Argentina (Cuartos)",
        "rival": "Talleres",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Pase por penales"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa de la Liga",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa de la Liga",
        "rival": "Racing Club",
        "stadium": "El Cilindro",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota sobre el final"
    },
    {
        "year": 2023,
        "month": "Octubre",
        "tournament": "Copa de la Liga",
        "rival": "Estudiantes LP",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate con suplentes"
    },
    {
        "year": 2023,
        "month": "Noviembre",
        "tournament": "Copa Libertadores (Final)",
        "rival": "Fluminense",
        "stadium": "Estadio Maracaná",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol de Luis Advíncula"
    },
    {
        "year": 2023,
        "month": "Noviembre",
        "tournament": "Copa de la Liga",
        "rival": "San Lorenzo",
        "stadium": "Nuevo Gasómetro",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Noviembre",
        "tournament": "Copa de la Liga",
        "rival": "Newell's",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2023,
        "month": "Noviembre",
        "tournament": "Copa Argentina (Semifinal)",
        "rival": "Estudiantes LP",
        "stadium": "Mario Alberto Kempes",
        "bocaScore": 2,
        "rivalScore": 3,
        "scorer": "Doblete de Merentiel"
    },
    {
        "year": 2023,
        "month": "Noviembre",
        "tournament": "Copa de la Liga",
        "rival": "Godoy Cruz",
        "stadium": "Malvinas Argentinas",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Gol de Miguel Merentiel"
    },
    {
        "year": 2024,
        "month": "Enero",
        "tournament": "Copa de la Liga (Fecha 1)",
        "rival": "Platense",
        "stadium": "Estadio Ciudad de Vicente López",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles en el debut del año"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 2)",
        "rival": "Sarmiento (J)",
        "stadium": "Estadio Pedro Bidegain",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Gol de Merentiel"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 3)",
        "rival": "Tigre",
        "stadium": "Estadio José Dellagiovanna",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Victoria firme de visitante"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 4)",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin tantos"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 5)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo sólido en La Bombonera"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 6)",
        "rival": "Lanús",
        "stadium": "Estadio Ciudad de Lanús",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Caída en el Sur"
    },
    {
        "year": 2024,
        "month": "Febrero",
        "tournament": "Copa de la Liga (Fecha 7)",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "\"El Medinazo\"\""
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa de la Liga (Fecha 8)",
        "rival": "Belgrano",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 2,
        "scorer": "Gran triunfo en casa"
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa de la Liga (Fecha 9)",
        "rival": "Unión",
        "stadium": "Estadio 15 de Abril",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota ajustada en Santa Fe"
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa de la Liga (Fecha 10)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Golazo de Blondel"
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa de la Liga (Fecha 11)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Jorge Luis Hirschi",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en La Plata"
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa Argentina (Treintaidosavos)",
        "rival": "Central Norte (S)",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Debut firme en la Copa Argentina"
    },
    {
        "year": 2024,
        "month": "Marzo",
        "tournament": "Copa de la Liga (Fecha 12)",
        "rival": "San Lorenzo",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Triunfo clave en el clásico"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 1)",
        "rival": "Nacional Potosí",
        "stadium": "Estadio Víctor Agustín Ugarte",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en la altura boliviana"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa de la Liga (Fecha 13)",
        "rival": "Newell's Old Boys",
        "stadium": "Estadio Marcelo Bielsa",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gran victoria en Rosario"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 2)",
        "rival": "Sportivo Trinidense",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo por la mínima en la Copa"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa de la Liga (Recuperación Fecha 11)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Jorge Luis Hirschi",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en el partido pendiente"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa de la Liga (Fecha 14)",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Golazo de Cavani"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa de la Liga (Cuartos de final)",
        "rival": "River Plate",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 3,
        "rivalScore": 2,
        "scorer": "Histórico baile en Córdoba con doblete de Merentiel"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 3)",
        "rival": "Fortaleza",
        "stadium": "Arena Castelão",
        "bocaScore": 2,
        "rivalScore": 4,
        "scorer": "Dura derrota en Brasil"
    },
    {
        "year": 2024,
        "month": "Abril",
        "tournament": "Copa de la Liga (Semifinal)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Roja insólita de Lema"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 4)",
        "rival": "Sportivo Trinidense",
        "stadium": "Estadio General Pablo Rojas",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Golazo de tiro libre de Cavani"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Liga Profesional (Fecha 1)",
        "rival": "Atlético Tucumán",
        "stadium": "Estadio Monumental José Fierro",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Caída en el arranque del torneo"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 5)",
        "rival": "Fortaleza",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en La Bombonera"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Liga Profesional (Fecha 2)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 4,
        "rivalScore": 2,
        "scorer": "Goleada de visitante en Santiago"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Liga Profesional (Fecha 3)",
        "rival": "Talleres (C)",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2024,
        "month": "Mayo",
        "tournament": "Copa Sudamericana (Fase de grupos - Fecha 6)",
        "rival": "Nacional Potosí",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Goleada para avanzar de ronda"
    },
    {
        "year": 2024,
        "month": "Junio",
        "tournament": "Liga Profesional (Fecha 4)",
        "rival": "Platense",
        "stadium": "Estadio Ciudad de Vicente López",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en Vicente López"
    },
    {
        "year": 2024,
        "month": "Junio",
        "tournament": "Liga Profesional (Fecha 5)",
        "rival": "Vélez Sarsfield",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo por la mínima en casa"
    },
    {
        "year": 2024,
        "month": "Junio",
        "tournament": "Copa Argentina (Dieciseisavos)",
        "rival": "Almirante Brown",
        "stadium": "Estadio Malvinas Argentinas",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Pase firme en la Copa Argentina"
    },
    {
        "year": 2024,
        "month": "Julio",
        "tournament": "Copa Sudamericana (Playoffs - Ida)",
        "rival": "Independiente del Valle",
        "stadium": "Estadio Banco Guayaquil",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Ecuador"
    },
    {
        "year": 2024,
        "month": "Julio",
        "tournament": "Liga Profesional (Fecha 6)",
        "rival": "Defensa y Justicia",
        "stadium": "Estadio Norberto Tomaghello",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Empate en Varela"
    },
    {
        "year": 2024,
        "month": "Julio",
        "tournament": "Copa Sudamericana (Playoffs - Vuelta)",
        "rival": "Independiente del Valle",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo y clasificación a octavos"
    },
    {
        "year": 2024,
        "month": "Julio",
        "tournament": "Liga Profesional (Fecha 8)",
        "rival": "Instituto",
        "stadium": "Estadio Monumental Alta Córdoba",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Córdoba"
    },
    {
        "year": 2024,
        "month": "Julio",
        "tournament": "Liga Profesional (Fecha 7)",
        "rival": "Banfield",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Goleada contundente en casa"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Liga Profesional (Fecha 9)",
        "rival": "Barracas Central",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en La Bombonera"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Liga Profesional (Fecha 10)",
        "rival": "Independiente Rivadavia",
        "stadium": "Estadio Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Villa erra penal"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Copa Sudamericana (Octavos - Ida)",
        "rival": "Cruzeiro",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Cavani"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Liga Profesional (Fecha 11)",
        "rival": "San Lorenzo",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 2,
        "scorer": "Gran victoria en el clásico"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Copa Sudamericana (Octavos - Vuelta)",
        "rival": "Cruzeiro",
        "stadium": "Estadio Mineirão",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Eliminación por penales (5-4)"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Liga Profesional (Fecha 12)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Jorge Luis Hirschi",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en La Plata"
    },
    {
        "year": 2024,
        "month": "Agosto",
        "tournament": "Liga Profesional (Fecha 13)",
        "rival": "Rosario Central",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Victoria importante de local"
    },
    {
        "year": 2024,
        "month": "Septiembre",
        "tournament": "Copa Argentina (Octavos)",
        "rival": "Talleres (C)",
        "stadium": "Estadio Malvinas Argentinas",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Pase por penales (8-7)"
    },
    {
        "year": 2024,
        "month": "Septiembre",
        "tournament": "Liga Profesional (Fecha 14)",
        "rival": "Racing Club",
        "stadium": "Estadio Presidente Perón",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Caída en Avellaneda"
    },
    {
        "year": 2024,
        "month": "Septiembre",
        "tournament": "Liga Profesional (Fecha 15)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Polémica arbitral por gol anulado a Giménez"
    },
    {
        "year": 2024,
        "month": "Septiembre",
        "tournament": "Liga Profesional (Fecha 16)",
        "rival": "Belgrano",
        "stadium": "Estadio Julio César Villagra",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en Córdoba"
    },
    {
        "year": 2024,
        "month": "Octubre",
        "tournament": "Liga Profesional (Fecha 17)",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo en casa"
    },
    {
        "year": 2024,
        "month": "Octubre",
        "tournament": "Liga Profesional (Fecha 18)",
        "rival": "Tigre",
        "stadium": "Estadio José Dellagiovanna",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Caída de visitante"
    },
    {
        "year": 2024,
        "month": "Octubre",
        "tournament": "Copa Argentina (Cuartos)",
        "rival": "Gimnasia y Esgrima (LP)",
        "stadium": "Estadio Marcelo Bielsa",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Pase por penales (2-1)"
    },
    {
        "year": 2024,
        "month": "Octubre",
        "tournament": "Liga Profesional (Fecha 19)",
        "rival": "Deportivo Riestra",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en La Bombonera"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Liga Profesional (Fecha 20)",
        "rival": "Lanús",
        "stadium": "Estadio Ciudad de Lanús",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota en el Sur"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Liga Profesional (Fecha 21)",
        "rival": "Godoy Cruz",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 1,
        "scorer": "Goleada contundente"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Liga Profesional (Fecha 22)",
        "rival": "Sarmiento (J)",
        "stadium": "Estadio Eva Perón",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo firme de visitante"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Liga Profesional (Fecha 23)",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Victoria por la mínima"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Liga Profesional (Fecha 24)",
        "rival": "Huracán",
        "stadium": "Estadio Tomás Adolfo Ducó",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate en Parque Patricios"
    },
    {
        "year": 2024,
        "month": "Noviembre",
        "tournament": "Copa Argentina (Semifinal)",
        "rival": "Vélez Sarsfield",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 3,
        "rivalScore": 4,
        "scorer": "\"El Bouzatazo\""
    },
    {
        "year": 2024,
        "month": "Diciembre",
        "tournament": "Liga Profesional (Fecha 25)",
        "rival": "Gimnasia y Esgrima (LP)",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Victoria para cerrar la fecha"
    },
    {
        "year": 2024,
        "month": "Diciembre",
        "tournament": "Liga Profesional (Fecha 26)",
        "rival": "Newell's Old Boys",
        "stadium": "Estadio Marcelo Bielsa",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo en Rosario"
    },
    {
        "year": 2024,
        "month": "Diciembre",
        "tournament": "Liga Profesional (Fecha 27)",
        "rival": "Independiente",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate para cerrar el torneo"
    },
    {
        "year": 2025,
        "month": "Enero",
        "tournament": "Copa Argentina (Treintaidosavos)",
        "rival": "Argentino (MM)",
        "stadium": "Estadio Único de San Nicolás",
        "bocaScore": 5,
        "rivalScore": 0,
        "scorer": "Debut de Ander Herrera"
    },
    {
        "year": 2025,
        "month": "Enero",
        "tournament": "Torneo Apertura (Fecha 1)",
        "rival": "Argentinos Juniors",
        "stadium": "Estadio Diego Armando Maradona",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles en el inicio del Apertura"
    },
    {
        "year": 2025,
        "month": "Enero",
        "tournament": "Torneo Apertura (Fecha 2)",
        "rival": "Unión",
        "stadium": "Estadio 15 de Abril",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate de visitante en Santa Fe"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 3)",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Debut goleador de Carlos Palacios"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 4)",
        "rival": "Racing Club",
        "stadium": "Estadio Presidente Perón",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota clásica en Avellaneda"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 5)",
        "rival": "Independiente Rivadavia",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Victoria sólida en La Bombonera"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 6)",
        "rival": "Banfield",
        "stadium": "Estadio Florencio Sola",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo ajustado de visitante en el Sur"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Copa Libertadores (Fase 2 - Ida)",
        "rival": "Alianza Lima",
        "stadium": "Estadio Alejandro Villanueva",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "\"Corré porque te saco\""
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 7)",
        "rival": "Aldosivi",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Victoria en casa"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Copa Libertadores (Fase 2 - Vuelta)",
        "rival": "Alianza Lima",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Eliminación por penales (4-5) tras igualar la serie"
    },
    {
        "year": 2025,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 8)",
        "rival": "Rosario Central",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Victoria por la mínima"
    },
    {
        "year": 2025,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 9)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Goleada de visitante en Santiago"
    },
    {
        "year": 2025,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 10)",
        "rival": "Defensa y Justicia",
        "stadium": "La Bombonera",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Contundente goleada en casa"
    },
    {
        "year": 2025,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 11)",
        "rival": "Newell's Old Boys",
        "stadium": "Estadio Marcelo Bielsa",
        "bocaScore": 0,
        "rivalScore": 2,
        "scorer": "Derrota en Rosario"
    },
    {
        "year": 2025,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 12)",
        "rival": "Barracas Central",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo ajustado"
    },
    {
        "year": 2025,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 13)",
        "rival": "Belgrano",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Gran victoria xeneize"
    },
    {
        "year": 2025,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 14)",
        "rival": "Estudiantes (LP)",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo sólido en La Bombonera"
    },
    {
        "year": 2025,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 15)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota en el Superclásico"
    },
    {
        "year": 2025,
        "month": "Mayo",
        "tournament": "Torneo Apertura (Fecha 16)",
        "rival": "Tigre",
        "stadium": "Estadio José Dellagiovanna",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en Victoria"
    },
    {
        "year": 2025,
        "month": "Mayo",
        "tournament": "Torneo Apertura (Octavos de final)",
        "rival": "Lanús",
        "stadium": "Estadio Único de San Nicolás",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Se definió por penales"
    },
    {
        "year": 2025,
        "month": "Mayo",
        "tournament": "Torneo Apertura (Cuartos de final)",
        "rival": "Independiente",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Eliminación en cuartos"
    },
    {
        "year": 2025,
        "month": "Junio",
        "tournament": "Copa Mundial de Clubes (Grupo - Fecha 1)",
        "rival": "Benfica",
        "stadium": "Hard Rock Stadium",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Empate internacional en el Mundial de Clubes"
    },
    {
        "year": 2025,
        "month": "Junio",
        "tournament": "Copa Mundial de Clubes (Grupo - Fecha 2)",
        "rival": "Bayern Múnich",
        "stadium": "MetLife Stadium",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Gol histórico de Merentiel"
    },
    {
        "year": 2025,
        "month": "Junio",
        "tournament": "Copa Mundial de Clubes (Grupo - Fecha 3)",
        "rival": "Auckland City",
        "stadium": "Inter&Co Stadium",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate vergonzoso en la fase de grupos"
    },
    {
        "year": 2025,
        "month": "Julio",
        "tournament": "Torneo Clausura (Fecha 1)",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate inicial en el Clausura"
    },
    {
        "year": 2025,
        "month": "Julio",
        "tournament": "Torneo Clausura (Fecha 2)",
        "rival": "Unión",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en casa"
    },
    {
        "year": 2025,
        "month": "Julio",
        "tournament": "Copa Argentina (Dieciseisavos)",
        "rival": "Atlético Tucumán",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Eliminación de la Copa Argentina"
    },
    {
        "year": 2025,
        "month": "Julio",
        "tournament": "Torneo Clausura (Fecha 3)",
        "rival": "Huracán",
        "stadium": "Estadio Tomás Adolfo Ducó",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Gol de Miljevic"
    },
    {
        "year": 2025,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 4)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate clásico"
    },
    {
        "year": 2025,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 5)",
        "rival": "Independiente Rivadavia",
        "stadium": "Estadio Malvinas Argentinas",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Primer gol de Velasco en Boca"
    },
    {
        "year": 2025,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 6)",
        "rival": "Banfield",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo sólido de local"
    },
    {
        "year": 2025,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 7)",
        "rival": "Aldosivi",
        "stadium": "Estadio José María Minella",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Victoria en Mar del Plata"
    },
    {
        "year": 2025,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 8)",
        "rival": "Rosario Central",
        "stadium": "Estadio Gigante de Arroyito",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "La Vuelta de Miguel a Rosario"
    },
    {
        "year": 2025,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 9)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Empate con muchos goles"
    },
    {
        "year": 2025,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 10)",
        "rival": "Defensa y Justicia",
        "stadium": "Estadio Norberto Tomaghello",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Derrota en Varela"
    },
    {
        "year": 2025,
        "month": "Octubre",
        "tournament": "Torneo Clausura (Fecha 11)",
        "rival": "Newell's Old Boys",
        "stadium": "La Bombonera",
        "bocaScore": 5,
        "rivalScore": 0,
        "scorer": "Goleada imponente en casa"
    },
    {
        "year": 2025,
        "month": "Octubre",
        "tournament": "Torneo Clausura (Fecha 13)",
        "rival": "Belgrano",
        "stadium": "Estadio Julio César Villagra",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Caída en Córdoba"
    },
    {
        "year": 2025,
        "month": "Octubre",
        "tournament": "Torneo Clausura (Fecha 12)",
        "rival": "Barracas Central",
        "stadium": "Estadio Claudio Chiqui Tapia",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Triunfo contundente"
    },
    {
        "year": 2025,
        "month": "Noviembre",
        "tournament": "Torneo Clausura (Fecha 14)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Jorge Luis Hirschi",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Victoria agónica"
    },
    {
        "year": 2025,
        "month": "Noviembre",
        "tournament": "Torneo Clausura (Fecha 15)",
        "rival": "River Plate",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Gol del Chango a Riber"
    },
    {
        "year": 2025,
        "month": "Noviembre",
        "tournament": "Torneo Clausura (Fecha 16)",
        "rival": "Tigre",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Victoria para cerrar la fase regular"
    },
    {
        "year": 2025,
        "month": "Noviembre",
        "tournament": "Torneo Clausura (Octavos de final)",
        "rival": "Talleres (C)",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Pase firme a cuartos"
    },
    {
        "year": 2025,
        "month": "Noviembre",
        "tournament": "Torneo Clausura (Cuartos de final)",
        "rival": "Argentinos Juniors",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo clave rumbo al título"
    },
    {
        "year": 2025,
        "month": "Diciembre",
        "tournament": "Torneo Clausura (Semifinales)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "El famoso cambio de Zeballos"
    },
    {
        "year": 2026,
        "month": "Enero",
        "tournament": "Torneo Apertura (Fecha 1)",
        "rival": "Deportivo Riestra",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Victoria inicial en el Apertura"
    },
    {
        "year": 2026,
        "month": "Enero",
        "tournament": "Torneo Apertura (Fecha 2)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Jorge Luis Hirschi",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Caída en La Plata"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 3)",
        "rival": "Newell's Old Boys",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo sólido en casa"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 4)",
        "rival": "Vélez Sarsfield",
        "stadium": "Estadio José Amalfitani",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Golazo de Zufiaurre"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 5)",
        "rival": "Platense",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate sin goles"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 6)",
        "rival": "Racing Club",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Empate clásico"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Copa Argentina (Treintaidosavos)",
        "rival": "Gimnasia y Esgrima (C)",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Triunfo firme en Copa Argentina"
    },
    {
        "year": 2026,
        "month": "Febrero",
        "tournament": "Torneo Apertura (Fecha 8)",
        "rival": "Gimnasia y Esgrima (M)",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en casa"
    },
    {
        "year": 2026,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 7)",
        "rival": "Lanús",
        "stadium": "Estadio Ciudad de Lanús",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Goleada de visitante en el Sur"
    },
    {
        "year": 2026,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 10)",
        "rival": "San Lorenzo",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate clásico"
    },
    {
        "year": 2026,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 11)",
        "rival": "Unión",
        "stadium": "Estadio 15 de Abril",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate en Santa Fe"
    },
    {
        "year": 2026,
        "month": "Marzo",
        "tournament": "Torneo Apertura (Fecha 12)",
        "rival": "Instituto",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Victoria contundente"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 13)",
        "rival": "Talleres (C)",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Triunfo clave de visitante"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 1)",
        "rival": "Universidad Católica",
        "stadium": "Estadio San Carlos de Apoquindo",
        "bocaScore": 1,
        "rivalScore": 2,
        "scorer": "Golazo de Paredes"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 14)",
        "rival": "Independiente",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Penal a Alan Velasco"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 2)",
        "rival": "Barcelona",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 0,
        "scorer": "Único gol de Ander en Boca"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 15)",
        "rival": "River Plate",
        "stadium": "Estadio Monumental",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Paredes y el Topo Gigio"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Torneo Apertura (Fecha 16)",
        "rival": "Defensa y Justicia",
        "stadium": "Estadio Norberto Tomaghello",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Goleada monumental de visitante"
    },
    {
        "year": 2026,
        "month": "Abril",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 3)",
        "rival": "Cruzeiro",
        "stadium": "Estadio Mineirão",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Roja insólita a Bareiro"
    },
    {
        "year": 2026,
        "month": "Mayo",
        "tournament": "Torneo Apertura (Fecha 9)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "Estadio Único Madre de Ciudades",
        "bocaScore": 2,
        "rivalScore": 1,
        "scorer": "Triunfo en Santiago"
    },
    {
        "year": 2026,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 4)",
        "rival": "Barcelona",
        "stadium": "Estadio Monumental Banco Pichincha",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Derrota por la mínima"
    },
    {
        "year": 2026,
        "month": "Mayo",
        "tournament": "Torneo Apertura (Octavos de final)",
        "rival": "Huracán",
        "stadium": "La Bombonera",
        "bocaScore": 2,
        "rivalScore": 3,
        "scorer": "Eliminación en tiempo suplementario"
    },
    {
        "year": 2026,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 5)",
        "rival": "Cruzeiro",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Final con polémica"
    },
    {
        "year": 2026,
        "month": "Mayo",
        "tournament": "Copa Libertadores (Fase de grupos - Fecha 6)",
        "rival": "Universidad Católica",
        "stadium": "La Bombonera",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Vergonzoso final"
    },
    {
        "year": 2026,
        "month": "Julio",
        "tournament": "Copa Argentina (Dieciseisavos)",
        "rival": "Sarmiento (J)",
        "stadium": "Estadio Malvinas Argentinas",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Debut oficial del segundo ciclo del Vasco"
    },
    {
        "year": 2026,
        "month": "Julio",
        "tournament": "Copa Sudamericana (Playoffs - Ida)",
        "rival": "O'Higgins",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Victoria en la ida internacional"
    },
    {
        "year": 2026,
        "month": "Julio",
        "tournament": "Torneo Clausura (Fecha 1)",
        "rival": "Deportivo Riestra",
        "stadium": "Estadio Guillermo Laza",
        "bocaScore": 0,
        "rivalScore": 3,
        "scorer": "Tropiezo en el arranque del Clausura"
    },
    {
        "year": 2026,
        "month": "Julio",
        "tournament": "Copa Sudamericana (Playoffs - Vuelta)",
        "rival": "O'Higgins",
        "stadium": "Estadio El Teniente",
        "bocaScore": 0,
        "rivalScore": 1,
        "scorer": "Clasificación por penales (4-3)"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 3)",
        "rival": "Newell's Old Boys",
        "stadium": "Estadio Marcelo Bielsa",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Empate con goles en Rosario"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 2)",
        "rival": "Estudiantes (LP)",
        "stadium": "Estadio Tomás Adolfo Ducó",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Partido jugado en el Ducó"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 4)",
        "rival": "Vélez Sarsfield",
        "stadium": "Estadio Tomás Adolfo Ducó",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Partido jugado en el Ducó"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Copa Sudamericana (Octavos - Ida)",
        "rival": "Recoleta",
        "stadium": "Estadio Tomás Adolfo Ducó",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Solida victoria de ida"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 5)",
        "rival": "Platense",
        "stadium": "Estadio Ciudad de Vicente López",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate de visitante"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Copa Sudamericana (Octavos - Vuelta)",
        "rival": "Recoleta",
        "stadium": "Estadio Municipal de Recoleta",
        "bocaScore": 4,
        "rivalScore": 0,
        "scorer": "Goleada y pase a cuartos"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 6)",
        "rival": "Racing Club",
        "stadium": "Estadio Presidente Perón",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Empate clásico"
    },
    {
        "year": 2026,
        "month": "Agosto",
        "tournament": "Torneo Clausura (Fecha 7)",
        "rival": "Lanús",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Gol de Belmonte agónico"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Copa Argentina (Octavos)",
        "rival": "Vélez Sarsfield",
        "stadium": "Estadio Mario Alberto Kempes",
        "bocaScore": 0,
        "rivalScore": 0,
        "scorer": "Montero heróico sobre el final"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 8)",
        "rival": "Gimnasia y Esgrima (M)",
        "stadium": "Estadio Víctor Antonio Legrotaglie",
        "bocaScore": 2,
        "rivalScore": 2,
        "scorer": "Empate agónico"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Copa Sudamericana (Cuartos - Ida)",
        "rival": "São Paulo",
        "stadium": "La Bombonera",
        "bocaScore": 1,
        "rivalScore": 0,
        "scorer": "Golazo de Merentiel"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 9)",
        "rival": "Central Córdoba (SdE)",
        "stadium": "La Bombonera",
        "bocaScore": 3,
        "rivalScore": 1,
        "scorer": "Debut goleador de Enner"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Copa Sudamericana (Cuartos - Vuelta)",
        "rival": "São Paulo",
        "stadium": "Estádio do Morumbi",
        "bocaScore": 1,
        "rivalScore": 1,
        "scorer": "Golazo de Lozano"
    },
    {
        "year": 2026,
        "month": "Septiembre",
        "tournament": "Torneo Clausura (Fecha 10)",
        "rival": "San Lorenzo",
        "stadium": "Estadio Pedro Bidegain",
        "bocaScore": 2,
        "rivalScore": 0,
        "scorer": "Tarde de lluvia torrencial."
    }
];