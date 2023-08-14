"use client";
import React from "react";
import Image from "next/image";
import "./font.css";
import HoverVideoPlayer from "react-hover-video-player";

const hogwart2 = () => {
  return (
    <div className="flex-col ">
      <div className=" h-screen mt-30">
        <div
          className="border-2 border-black mx-1 md:mx-9
        w-[535px] md:w-[95vw]  bg-[#CDB090]"
        >
          <div className="text-[30px] md:text-[68px] font-bold font-sans text-center md:pt-10 news-head p-4 tracking-widest overflow-hidden ">
            DUMBLEDORE: DRAFT OR DANGEROUS?
          </div>

          <div className="gap-1 md:flex">
            {/* 1st panel */}

            <div className=" h-screen w-[530px] md:w-[60%] m-4">
              <div className="flex md:gap-8">
                <div className="border-[1px] border-black h-[480px] w-[290px] md:w-[690px] overflow-hidden  p-4 text">
                  <div className="sub-head border-b-[2.2px] border-black">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <b>Harry</b> , ipsum dolor sit amet consectetur adipisicing
                  elit. Ullam a nam delectus deleniti, explicabo consectetur
                  labore ad assumenda ab molestias quisquam totam officia!
                  Facere velit expedita possimus maxime dolore voluptates
                  voluptatem debitis praesentium similique at, delectus ipsa ab.
                  Impedit, minima? Facere velit expedita possimus maxime dolore
                  voluptates volupta.tes voluptatem debitis praesentium
                  similique at, delectus ipsa ab. Impedit, minima? praesentium
                  similique at, delectus ipsa ab. Impedit, minima? delectus ipsa
                  ab. Impedit, minima? Voluptatem ad, provident esse tempora
                  recusandae aut voluptatum. Quidem saepe distinctio voluptas.
                  Porro iure vitae ducimus fuga Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Accusantium natus inventore quis
                  veritatis sed? Accusantium natus inventore quis veritatis sed?
                  Voluptatem ad, provident esse tempora recusandae aut
                  voluptatum. Quidem saepe distinctio voluptas. Porro iure vitae
                  ducimus fuga Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Accusantium natus inventore quis veritatis
                  sed? Accusantium natus inventore quis veritatis sed?
                </div>

                <div className="h-[480px] w-[225px] border-[1px] border-black md:w-[480px]">
                   {/* <Image
                    src="https://images.pexels.com/photos/15382556/pexels-photo-15382556/free-photo-of-a-beach-covered-in-snow-and-the-seascape-under-a-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    width={360}
                    height={90}
                    alt="demo"
                    className="h-[480px] w-[225px] border-[1px] border-black    md:w-[480px]"
                  />  */}




                  <video autoPlay loop muted src="/assets/harry_2.mp4"  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-colors duration-1000 ease-linear"/>
                  


                </div>
              </div>

              <div className="h-[360px] mt-2 border-[1px] border-black overflow-hidden p-4 text ">
                <div className="sub-head border-b-[2.2px] border-black">
                  Lorem ipsum dolor sit amet.
                </div>
                <b>Harry</b> ipsum dolor sit amet consectetur adipisicing elit.
                Tenetur praesentium, modi officiis iste ut, incidunt harum
                impedit, ducimus at sunt doloremque atque error delectus.
                Asperiores illo ab, provident nesciunt voluptas alias minus
                molestiae odio nobis consequuntur nulla? Officia veritatis nulla
                velit, quibusdam ullam tempore, itaque qui doloremque excepturi
                ipsa, accusantium id nesciunt debitis exercitationem quo maxime
                vitae obcaecati maiores odit! Doloribus, culpa facilis. Fugit
                nesciunt optio, hic ullam facere aperiam totam? Sit quisquam,
                quia maiores harum vitae assumenda eaque, minima architecto
                doloribus qui blanditiis quidem libero est nam id ex iusto
                incidunt dolorem, sapiente dicta quas sed. Voluptatibus,
                accusantium dolore. amet consectetur adipisicing
                elit.Accusantium natus inventore quis veritatis sed? Voluptatem
                ad, provident esse tempora recusandae aut voluptatum. Quidem
                saepe distinctio voluptas. Porro iure vitae ducimus fuga Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
                natus inventore quis veritatis sed? Accusantium natus inventore
                quis veritatis sed? Accusantium natus inventore quis veritatis
                sed? amet consectetur adipisicing elit.Accusantium natus
                inventore quis veritatis sed? Voluptatem ad, provident esse
                tempora recusandae aut voluptatum. Quidem saepe distinctio
                voluptas. Porro iure vitae ducimus fuga Lorem ipsum, dolor sit
                amet .
              </div>
            </div>

            {/* 2nd panel */}

            <div className="bg-yellow-30 m-4 h-screen w-[40%] grid grid-rows-3 grid-flow-col ">
              <div className="flex">
                <div class="flex  h-screen relative border-[1px] border-black">
                  <div class="row-span-2 w-[60px] p-1 text-center  font-medium tracking-wider vertical_head text-black sub-head">
                    Lorem ipsum dolor, sit amet coicing?
                  </div>
                  <div class="row-span-2  w-[260px] p-4 border-l-[1px] border-black text">
                    <b>Harry</b> ipsum, dolor sit amet consectetur adipisicing
                    elit.Accusantium natus inventore quis veritatis sed?
                    Voluptatem ad, provident esse tempora recusandae aut
                    voluptatum. Quidem saepe distinctio voluptas. Porro iure
                    vitae ducimus fuga Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Accusantium natus inventore quis veritatis
                    sed? Voluptatem ad, provident esse tempora recusandae aut
                    voluptatum. Quidem saepe distinctio voluptas. Porro iure
                    vitae ducimus fuga sapiente numquam atque soluta modi totam
                    iste, debitis hic dignissimos obcaecati impedit tempora
                    doloremque eligendi autem, nam architecto maiores? Fuga unde
                    voluptas aut repellendus! voluptatum. Quidem saepe
                    distinctio voluptas. Porro iure vitae ducimus fuga sapiente
                    numquam atque soluta modi totam iste, debitis hic
                    dignissimos obcaecati impedit tempora doloremque eligendi
                    autem, nam architecto maiores? Fuga unde voluptas aut
                    repellendus! sapiente numquam atque soluta modi totam iste,
                    debitis hic dignissimos obcaecati impedit tempora
                    doloremque.
                  </div>
                </div>

                <div class="row-span-3 overflow-hidden p-4 border-[1px] border-black h-screen text">
                  <div className="sub-head border-b-[2.2px] border-black">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <b>Harry</b> ipsum dolor sit, amet consectetur adipisicing
                  elit. Distinctio amet vitae aspernatur tempore ratione quos
                  reatur ea delectus reiciendis, cum sit alias repellendus
                  laboriosam officia, in eius, exercitationem nulla enim debitis
                  fuga voluptate accusantium inventore omnis fugit? Optio ipsa
                  quia quae, delectus molestias odio iste quaerat atque eos
                  similique qui harum eaque? Minus, . tempore ratione quos
                  reatur ea delectus reiciendis, cum sit alias repellendus
                  laboriosam officia, in eius, exercitationem nulla enim debitis
                  fuga voluptate accusantium inventore omnis fugit? Optio ipsa
                  quia quae, delectus molestias odio iste quaerat atque eos
                  similique qui harum eaque? Minus, Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit.Accusantium natus inventore quis
                  veritatis sed? Voluptatem ad, provident esse tempora
                  recusandae aut voluptatum. Quidem saepe distinctio voluptas.
                  Porro iure vitae ducimus fuga Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Accusantium natus inventore quis
                  veritatis sed? Accusantium natus inventore quis veritatis sed?
                </div>
              </div>

              {/* <div></div>
              <div></div>
              <div></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-96">rger</div> */}
    </div>
  );
};

export default hogwart2;
