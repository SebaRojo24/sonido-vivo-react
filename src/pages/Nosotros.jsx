import { Container, Row, Col, Image } from 'react-bootstrap';
import TarjetaPilar from '../components/TarjetaPilares';

function Nosotros() {
  const pilaresData = [
    {
      id: 1,
      titulo: 'Experiencia',
      descripcion: 'Más de una década asesorando a bandas, productoras y músicos independientes para ayudarles a encontrar su sonido ideal.',
      imagen: '/img/nosotros/nosotros2.jpg'
    },
    {
      id: 2,
      titulo: 'Calidad Garantizada',
      descripcion: 'Trabajamos exclusivamente con marcas reconocidas a nivel mundial, asegurando durabilidad, fidelidad y un rendimiento óptimo.',
      imagen: '/img/nosotros/nosotros3.jpg'
    },
    {
      id: 3,
      titulo: 'Soporte Técnico',
      descripcion: 'No solo somos una tienda; te acompañamos en la postventa con un equipo de expertos listos para resolver cualquier duda.',
      imagen: '/img/nosotros/nosotros4.jpg'
    }
  ];

  return (
    <Container className="py-5">
      {/* Sección Hero / Historia */}
      <Row className="justify-content-center text-center mb-5">
        <Col lg={8}>
          <h1 className="display-4 fw-bold mb-4">Nuestra Historia</h1>
          <Image 
            src="/img/nosotros/nosotros1.jpg" 
            alt="Fachada de la tienda Sonido Vivo en Viña del Mar" 
            fluid 
            rounded 
            className="mb-4 shadow-sm"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <p className="lead text-secondary">
            Nacimos hace 11 años en el corazón de Viña del Mar con una sola misión: 
            equipar a los músicos de la Región de Valparaíso y de todo Chile con los 
            mejores instrumentos y equipos de audio.
          </p>
        </Col>
      </Row>

      {/* Sección Nuestros Pilares */}
      <section className="mt-5">
        <h2 className="text-center fw-bold mb-4">Nuestros Pilares</h2>
        <Row className="g-4">
          {pilaresData.map((pilar) => (
            <TarjetaPilar
              key={pilar.id}
              imagen={pilar.imagen}
              titulo={pilar.titulo}
              descripcion={pilar.descripcion}
            />
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Nosotros;