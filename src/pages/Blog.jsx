import { Container } from 'react-bootstrap';
import { blogsData } from '../data/blogsData';
import TarjetaBlog from '../components/TarjetaBlog';

function BlogPage() {
  return (
    <Container className="py-5">
      {/* Sección Hero */}
      <section className="text-center mb-5 bg-light p-4 rounded shadow-sm">
        <h1 className="display-5 fw-bold mb-3">NOTICIAS IMPORTANTES</h1>
        <p className="lead text-muted mb-0">
          Entérate de las últimas novedades, tips de mantenimiento y datos curiosos del mundo musical.
        </p>
      </section>

      {/* Listado de Noticias */}
      <section>
        {blogsData.map((blog) => (
          <TarjetaBlog key={blog.id} blog={blog} />
        ))}
      </section>
    </Container>
  );
}

export default BlogPage;