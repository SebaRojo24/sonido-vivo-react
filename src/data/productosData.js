// src/data/productosData.js
import teclado from "../assets/teclado.jpg";
import baterias from "../assets/bateria.jpg";
import afinador from "../assets/afinador.jpg";
import amplificador from "../assets/amplificador.jpg";
import audifono from "../assets/auriculares.jpg";
import bajo from "../assets/bajo.jpg";
import cable from "../assets/cable.jpg";
import capo from "../assets/capo.jpg";
import cuerdas from "../assets/cuerdas.jpg";
import guitarra from "../assets/guitarra.jpg";
import microfono from "../assets/microfono.jpg";
import monitor from "../assets/monitor.jpg";
import pedal from "../assets/pedal.jpg";
import filter from "../assets/popfilter.jpg";
import pua from "../assets/pua.jpg";
import soporte from "../assets/soporte.jpg";
import guitarraAcu from "../assets/guitarraAcu.jpg";

export const initialProducts = [
  {
    id: 'GA001',
    name: 'Guitarra Acústica Folk Yamaha F310',
    category: 'Guitarras Acústicas',
    price: 129990,
    description: 'Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.',
    image: guitarraAcu,
    isOffer: false,
    stock: 8
  },
  {
    id: 'GA002',
    name: 'Guitarra Acústica Dreadnought Fender CD-60S',
    category: 'Guitarras Acústicas',
    price: 189990,
    description: 'Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.',
    image: guitarraAcu,
    isOffer: false,
    stock: 5
  },
  {
    id: 'GA003',
    name: 'Guitarra Acústica Clásica 4/4 Yamaha C40',
    category: 'Guitarras Acústicas',
    price: 89990,
    description: 'Nailon, tapa de abeto. Ideal para estudio y flamenco.',
    image: guitarraAcu,
    isOffer: true,
    stock: 10
  },
  {
    id: 'GA004',
    name: 'Guitarra Electroacústica Takamine GN20CE',
    category: 'Guitarras Acústicas',
    price: 349990,
    description: 'Pickup integrado, afinador incorporado.',
    image: guitarraAcu,
    isOffer: false,
    stock: 3
  },
  {
    id: 'GA005',
    name: 'Guitarra 3/4 Niños Yamaha JR1',
    category: 'Guitarras Acústicas',
    price: 79990,
    description: 'Tamaño reducido para niños de 6 a 10 años.',
    image: guitarraAcu,
    isOffer: false,
    stock: 6
  },
  {
    id: 'GE001',
    name: 'Guitarra Eléctrica Stratocaster Squier Affinity Strat',
    category: 'Guitarras Eléctricas',
    price: 249990,
    description: 'Cuerpo de álamo, mástil de arce, pastillas SSS.',
    image: guitarra,
    isOffer: false,
    stock: 5
  },
  {
    id: 'GE002',
    name: 'Guitarra Eléctrica Les Paul Epiphone Les Paul Std',
    category: 'Guitarras Eléctricas',
    price: 329990,
    description: 'Cuerpo caoba, tapa arce, pastillas humbucker.',
    image: guitarra,
    isOffer: false,
    stock: 4
  },
  {
    id: 'GE003',
    name: 'Guitarra Eléctrica SG Epiphone SG Standard',
    category: 'Guitarras Eléctricas',
    price: 319990,
    description: 'Cuerpo caoba, mástil caoba, 2 humbuckers.',
    image: guitarra,
    isOffer: false,
    stock: 3
  },
  {
    id: 'GE004',
    name: 'Guitarra Eléctrica Telecaster Squier Affinity Tele',
    category: 'Guitarras Eléctricas',
    price: 239990,
    description: 'Cuerpo álamo, clavijero vintage, 2 pastillas single.',
    image: guitarra,
    isOffer: true,
    stock: 4
  },
  {
    id: 'GE005',
    name: 'Guitarra Eléctrica Semi-hollow Epiphone ES-335',
    category: 'Guitarras Eléctricas',
    price: 549990,
    description: 'Semi-hueca, 2 humbuckers, ideal para jazz y blues.',
    image: guitarra,
    isOffer: true,
    stock: 2
  },
  {
    id: 'BA001',
    name: 'Bajo Eléctrico 4 Cuerdas Squier Affinity PJ',
    category: 'Bajos Eléctricos',
    price: 299990,
    description: 'Pickup PJ, cuerpo álamo, mástil arce.',
    image: bajo,
    isOffer: false,
    stock: 5
  },
  {
    id: 'BA002',
    name: 'Bajo Eléctrico Jazz Bass Fender Player Jazz',
    category: 'Bajos Eléctricos',
    price: 699990,
    description: 'Alder body, 2 Alnico V Jazz single-coil.',
    image: bajo,
    isOffer: false,
    stock: 2
  },
  {
    id: 'BA003',
    name: 'Bajo Acústico 4 Cuerdas Yamaha APX700II',
    category: 'Bajos Eléctricos',
    price: 429990,
    description: 'Electroacústico, afinador incorporado.',
    image: bajo,
    isOffer: true,
    stock: 2
  },
  {
    id: 'BT001',
    name: 'Batería Acústica 5 piezas Pearl Roadshow',
    category: 'Baterías',
    price: 599990,
    description: 'Incluye stands, platillos y pedal de bombo.',
    image: baterias,
    isOffer: false,
    stock: 2
  },
  {
    id: 'BT002',
    name: 'Batería Electrónica 8 pads Roland TD-02KV',
    category: 'Baterías',
    price: 799990,
    description: 'Módulo TD-02, 8 pads de goma, pedal hi-hat.',
    image: baterias,
    isOffer: true,
    stock: 2
  },
  {
    id: 'BT003',
    name: 'Caja Snare 14" Pearl STE1450',
    category: 'Baterías',
    price: 89990,
    description: 'Acero, 14x5", 10 tensores.',
    image: baterias,
    isOffer: false,
    stock: 4
  },
  {
    id: 'BT004',
    name: 'Platillo Hi-Hat 14" Zildjian A Series',
    category: 'Baterías',
    price: 149990,
    description: 'Latón B20, sonido brillante y claro.',
    image: baterias,
    isOffer: false,
    stock: 3
  },
  {
    id: 'BT005',
    name: 'Platillo Crash 16" Zildjian A Series',
    category: 'Baterías',
    price: 129990,
    description: 'Latón B20, ataque rápido.',
    image: baterias,
    isOffer: true,
    stock: 3
  },
  {
    id: 'TC001',
    name: 'Teclado Digital 61 teclas Yamaha PSR-E373',
    category: 'Teclados y Pianos',
    price: 249990,
    description: '61 teclas sensibles al tacto, 622 voces.',
    image: teclado,
    isOffer: false,
    stock: 4
  },
  {
    id: 'TC002',
    name: 'Piano Digital 88 teclas Yamaha P-45',
    category: 'Teclados y Pianos',
    price: 499990,
    description: '88 teclas pesadas, 10 voces, pedal sustain incluido.',
    image: teclado,
    isOffer: false,
    stock: 2
  },
{
    id: 'TC003',
    name: 'Sintetizador 49 teclas Arturia MiniLab MKII',
    category: 'Teclados y Pianos',
    price: 129990,
    description: 'MIDI controller, 49 mini teclas.',
    image: teclado,
    isOffer: false,
    stock: 5
  },
  {
    id: 'TC004',
    name: 'Teclado MIDI 88 teclas M-Audio Hammer 88',
    category: 'Teclados y Pianos',
    price: 399990,
    description: '88 teclas martillo, sin sonidos propios.',
    image: teclado,
    isOffer: false,
    stock: 2
  },
  {
    id: 'AM001',
    name: 'Amplificador Guitarra 15W Fender Frontman 15G',
    category: 'Amplificadores',
    price: 99990,
    description: '15W, distorsión incorporada, entrada auxiliar.',
    image: amplificador,
    isOffer: true,
    stock: 5
  },
  {
    id: 'AM002',
    name: 'Amplificador Guitarra 40W Marshall MG40GFX',
    category: 'Amplificadores',
    price: 299990,
    description: '40W, 4 canales, efectos digitales integrados.',
    image: amplificador,
    isOffer: true,
    stock: 3
  },
  {
    id: 'AM003',
    name: 'Amplificador Bajo 100W Hartke HD100',
    category: 'Amplificadores',
    price: 449990,
    description: '100W, tweeter integrado, ecualizador de 4 bandas.',
    image: amplificador,
    isOffer: false,
    stock: 2
  },
  {
    id: 'AM004',
    name: 'Amplificador Acústico 40W Fishman Loudbox Mini',
    category: 'Amplificadores',
    price: 499990,
    description: '60W, 2 canales, reverb y chorus incorporados.',
    image: amplificador,
    isOffer: false,
    stock: 2
  },
  {
    id: 'MI001',
    name: 'Micrófono Dinámico Cardioide Shure SM58',
    category: 'Micrófonos',
    price: 149990,
    description: 'Estándar industria para voz en vivo.',
    image: microfono,
    isOffer: true,
    stock: 8
  },
  {
    id: 'MI002',
    name: 'Micrófono Dinámico Instrumento Shure SM57',
    category: 'Micrófonos',
    price: 139990,
    description: 'Ideal para captura de instrumentos y amplificadores.',
    image: microfono,
    isOffer: false,
    stock: 6
  },
  {
    id: 'MI003',
    name: 'Micrófono Condensador Audio-Tech. AT2020',
    category: 'Micrófonos',
    price: 199990,
    description: 'Cardioide, XLR, ideal para grabación en estudio.',
    image: microfono,
    isOffer: false,
    stock: 4
  },
  {
    id: 'MI004',
    name: 'Micrófono USB de Condensador Blue Yeti',
    category: 'Micrófonos',
    price: 299990,
    description: 'USB, 4 patrones polares, ideal para streaming y podcast.',
    image: microfono,
    isOffer: false,
    stock: 5
  },
  {
    id: 'PE001',
    name: 'Pedal Distorsión Boss DS-1',
    category: 'Pedales de Efectos',
    price: 79990,
    description: 'Clásico pedal de distorsión, 3 controles.',
    image: pedal,
    isOffer: false,
    stock: 7
  },
  {
    id: 'PE002',
    name: 'Pedal Reverb Boss RV-6',
    category: 'Pedales de Efectos',
    price: 179990,
    description: '8 modos de reverb, control de shimmer.',
    image: pedal,
    isOffer: false,
    stock: 4
  },
  {
    id: 'PE003',
    name: 'Pedal Multi-efectos Boss ME-80',
    category: 'Pedales de Efectos',
    price: 349990,
    description: 'Diseño tipo pedalboard, 8 efectos simultáneos.',
    image: pedal,
    isOffer: false,
    stock: 2
  },
  {
    id: 'PE004',
    name: 'Pedal Tuner Cromático Boss TU-3',
    category: 'Pedales de Efectos',
    price: 89990,
    description: 'Afinador cromático, indicador de tono.',
    image: afinador,
    isOffer: true,
    stock: 8
  },
  {
    id: 'PE005',
    name: 'Pedal Delay MXR Carbon Copy',
    category: 'Pedales de Efectos',
    price: 179990,
    description: 'Delay analógico cálido, tiempo 600ms.',
    image: pedal,
    isOffer: true,
    stock: 4
  },
  {
    id: 'PE006',
    name: 'Pedal Overdrive Ibanez TS9',
    category: 'Pedales de Efectos',
    price: 99990,
    description: 'Tube Screamer clásico, sonido suave y orgánico.',
    image: pedal,
    isOffer: false,
    stock: 6
  },
  {
    id: 'AC001',
    name: 'Cuerdas Guitarra Eléctrica 09-42 Ernie Ball Super Slinky',
    category: 'Accesorios',
    price: 8990,
    description: 'Juego 6 cuerdas, calibre ligero.',
    image: cuerdas,
    isOffer: true,
    stock: 25
  },
  {
    id: 'AC002',
    name: 'Cuerdas Guitarra Acústica 12-53 Ernie Ball Earthwood',
    category: 'Accesorios',
    price: 10990,
    description: 'Bronce fósforo, sonido cálido.',
    image: cuerdas,
    isOffer: false,
    stock: 20
  },
  {
    id: 'AC003',
    name: 'Cuerdas Bajo 45-105 Ernie Ball Regular Slinky',
    category: 'Accesorios',
    price: 14990,
    description: 'Cuerdas de níquel enrollado, set 4 cuerdas.',
    image: cuerdas,
    isOffer: false,
    stock: 12
  },
  {
    id: 'AC004',
    name: 'Púas de Guitarra x10 (0.73mm) Fender 351',
    category: 'Accesorios',
    price: 3990,
    description: 'Celulosa, grosor medio.',
    image: pua,
    isOffer: false,
    stock: 50
  },
  {
    id: 'AC005',
    name: 'Capotraste Guitarra Dunlop Trigger',
    category: 'Accesorios',
    price: 12990,
    description: 'Capotraste de resorte, compatible 6 cuerdas.',
    image: capo,
    isOffer: false,
    stock: 15
  },
  {
    id: 'AC006',
    name: 'Afinador de Clip Snark SN-5',
    category: 'Accesorios',
    price: 8990,
    description: 'Afinador cromático de clip, pantalla giratoria.',
    image: afinador,
    isOffer: false,
    stock: 20
  },
  {
    id: 'AC007',
    name: 'Cable Instrumento 3m Monster S100-I-3',
    category: 'Accesorios',
    price: 12990,
    description: 'Cable trenzado, conectores dorados, 3 metros.',
    image: cable,
    isOffer: false,
    stock: 15
  },
  {
    id: 'AC008',
    name: 'Cable Instrumento 6m Monster S100-I-6',
    category: 'Accesorios',
    price: 17990,
    description: 'Cable trenzado, conectores dorados, 6 metros.',
    image: cable,
    isOffer: false,
    stock: 10
  },
  {
    id: 'AC009',
    name: 'Soporte Guitarra de Piso Hercules GS302B',
    category: 'Accesorios',
    price: 22990,
    description: 'Soporte plegable con enganche automático.',
    image: soporte,
    isOffer: true,
    stock: 12
  },
  {
    id: 'AC010',
    name: 'Soporte Guitarra de Pared Hercules WAH-202',
    category: 'Accesorios',
    price: 18990,
    description: 'Montaje a pared, enganche automático.',
    image: soporte,
    isOffer: true,
    stock: 10
  },
  {
    id: 'ES002',
    name: 'Auriculares de Estudio Audio-Tech. ATH-M20x',
    category: 'Estudio y Grabación',
    price: 79990,
    description: 'Circumaurales, respuesta 15Hz-20kHz.',
    image: audifono,
    isOffer: false,
    stock: 6
  },
  {
    id: 'ES003',
    name: 'Auriculares de Estudio Pro Audio-Tech. ATH-M50x',
    category: 'Estudio y Grabación',
    price: 219990,
    description: 'Referencia de industria, sonido neutro y detallado.',
    image: audifono,
    isOffer: false,
    stock: 4
  },
  {
    id: 'ES004',
    name: 'Monitor de Estudio 5" Yamaha HS5',
    category: 'Estudio y Grabación',
    price: 349990,
    description: 'Altavoz activo, respuesta plana, ideal mezcla.',
    image: monitor,
    isOffer: true,
    stock: 2
  },
  {
    id: 'ES005',
    name: 'Pop Filter para Micrófono Sennheiser MZP 40',
    category: 'Estudio y Grabación',
    price: 14990,
    description: 'Doble malla, brazo flexible con clip.',
    image: filter,
    isOffer: false,
    stock: 8
  }
]