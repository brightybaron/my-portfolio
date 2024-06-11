// local json
// const data = (await import("../../public/data/content.json")).default;
// const contents = data;

// from SUPABASE
const response = await fetch("http://localhost:5432");
const data = await response.json();
const contents = data.dbPortfolio.data;
contents.sort((a, b) => b.id - a.id);

const Content = () => {
  return (
    <>
      {contents.map((content, index) => (
        <>
          <div
            class={`nav-content ${content.category} relative float-left w-[calc(1/2*100%-1.2rem)] sm:w-[calc(1/4*100%-1.2rem)] h-auto m-1 cursor-pointer overflow-hidden rounded-md`}
            data-category={content.category}
            key={index}
          >
            <>
              <a
                class="w-full h-full relative flex flex-wrap overflow-hidden transition-all justify-center items-center aspect-square hover:scale-[1.03] rounded-md border-b"
                href={"/my-portfolio" + content.link}
              >
                {content.images.map((image) => (
                  <div class="grow shrink basis-auto w-1/2 aspect-square">
                    <img
                      src={image.src}
                      alt={image.src + "foto"}
                      class="w-full h-full object-cover transition-all p-px rounded-md"
                    />
                  </div>
                ))}
              </a>
              <>
                <div class="bg-white/30 w-full pl-px pt-1 flex justify-evenly">
                  <p class="text-gray-400">
                    {new Date(content.created_at).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p
                    class:list={[
                      "text-end capitalize text-gray-900 px-1",
                      {
                        "bg-teal-200": content.category.includes("photos"),
                      },
                      {
                        "bg-indigo-200": content.category.includes("posts"),
                      },
                      {
                        "bg-orange-200": content.category.includes("projects"),
                      },
                    ]}
                  >
                    {content.category}
                  </p>
                </div>
              </>
              <p class="font-semibold mb-2 text-base underline text-center">
                {content.title}
              </p>
            </>
          </div>
        </>
      ))}
    </>
  );
};

export default Content;
