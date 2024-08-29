import NewProductForm from "@/components/products/NewProductForm";

function NewProductPage() {

  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-full lg:w-4/5 flex justify-center">
        <article className="py-5 px-3 sm:px-5 w-full md:w-3/4 flex flex-col items-center rounded-lg bg-secondary">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">
            Nuevo Producto
          </h1>
            <NewProductForm />
        </article>
      </section>
      <div className="my-10 grid space-y-2">
        <h2>
        link de imagenes para productos
        </h2>
        <div className="flex items-center gap-2 text-xs">
            <p>Mouse Gamer</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875089/nest-products/nest-mouseGamer_hjo7ko.jpg
            </code>
            </pre>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <p>Laptop Gamer</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875090/nest-products/nest-laptopGamer_j4gas5.jpg
            </code>
            </pre>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <p>Teclado Gamer</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875089/nest-products/nest-teclado_egl34h.jpg
            </code>
            </pre>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <p>Monitor Gamer</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875089/nest-products/nest-monitor_pgqkvc.jpg
            </code>
            </pre>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <p>Escritorio Gamer</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875089/nest-products/nest-desktopGamer_jz2hof.jpg
            </code>
            </pre>
        </div>
        <div className="flex items-center gap-2 text-xs">
            <p>Laptop normal</p>
            <pre className="px-4 bg-secondary rounded-xl">
            <code >
            https://res.cloudinary.com/dtgxrnxer/image/upload/v1724875089/nest-products/nest-laptop_qouupw.jpg
            </code>
            </pre>
        </div>
      </div>
    </main>
  );
}

export default NewProductPage;
