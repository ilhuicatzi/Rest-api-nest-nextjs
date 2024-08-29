import EditProductForm from '@/components/products/EditProductForm';

function EditProductPage() {
  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-full lg:w-4/5 flex justify-center">
        <article className="py-5 px-3 sm:px-5 w-full md:w-3/4 flex flex-col items-center rounded-lg bg-secondary">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">
            Editar Producto
          </h1>
            <EditProductForm />
        </article>
      </section>
    </main>
  );
}

export default EditProductPage;
