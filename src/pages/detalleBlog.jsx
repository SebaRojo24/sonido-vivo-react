import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { blogsData } from '../data/blogsData';

function DetalleBlog() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <Container className="py-5 text-center">
        <h2>Artículo no encontrado</h2>
        <Button as={Link} to="/blog" variant="dark" className="mt-3">
          ← Volver a los blogs
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={9}>
          <article>
            {/* Cabecera */}
            <header className="mb-4">
              <h1 className="fw-bold mb-2">{blog.titulo}</h1>
              <p className="text-muted small">
                Publicado el {blog.fecha} | Por {blog.autor}
              </p>
            </header>

            {/* Imagen Principal */}
            <Image 
              src={blog.imagen} 
              alt={blog.titulo} 
              fluid 
              rounded 
              className="w-100 mb-4 shadow-sm"
              style={{ maxHeight: '420px', objectFit: 'cover' }}
            />

            {/* Texto del Artículo */}
            <div className="contenido-texto fs-5 mb-5">
              <p className="mb-4">{blog.introduccion}</p>

              {blog.secciones.map((seccion, index) => (
                <div key={index} className="mb-4">
                  <h2 className="h4 fw-bold mt-4 mb-3">{seccion.subtitulo}</h2>
                  <p>{seccion.contenido}</p>
                  
                  {seccion.lista && (
                    <ul className="mt-3">
                      {seccion.lista.map((item, idx) => (
                        <li key={idx} className="mb-2">
                          <strong>{item.negrita}</strong>
                          {item.texto}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {blog.conclusion && (
                <p className="fw-bold mt-4 p-3 bg-light border-start border-4 border-dark rounded">
                  {blog.conclusion}
                </p>
              )}
            </div>

            {/* Botón de Retorno */}
            <div className="border-top pt-4">
              <Button as={Link} to="/blog" variant="outline-dark">
                ← Volver a los blogs
              </Button>
            </div>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleBlog;