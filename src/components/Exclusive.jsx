import { campaigns } from "../helpers/data.jsx";

const Exclusive = () => {
  return (
    <section className="py-16 px-6 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-2 items-center text-center">
            <p className="text-xs tracking-wide font-semibold uppercase">
              {campaigns[0].subtitle}
            </p>
            <h2 className="text-2xl font-bold  ">{campaigns[0].title}</h2>
          </div>
          <img
            src={campaigns[0].image}
            alt={campaigns[0].title}
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6  justify-between">
          {[campaigns[1], campaigns[2]].map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-center text-center">
                <p className="text-xs font-semibold  tracking-wide uppercase">
                  {item.subtitle}
                </p>
                <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
