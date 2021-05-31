import Head from "next/head";
import Image from "next/image";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Link from "next/link";
import Layout from "../components/layout/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Edwin Narváez - Blog</title>
        <meta
          name="description"
          content="React, Nextjs, Graphql, Nodejs y más"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-7">
            {posts.map((post) => {
              return (
                <Link key={post.path} href={post.path}>
                  <a className="">
                    <h2>{post.title} &rarr;</h2>
                  </a>
                </Link>
              );
            })}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, in? Dicta officiis blanditiis quam obcaecati nemo molestias inventore dignissimos nulla deleniti ipsa quidem quisquam, reprehenderit doloremque cupiditate voluptatibus quia ducimus?
            Excepturi quibusdam facere odio voluptates alias expedita. Similique aliquam aliquid aperiam dolorem odio earum exercitationem iste ratione, non molestias impedit optio suscipit a molestiae, necessitatibus qui totam dignissimos cum? Eveniet!
            Beatae, nobis aut quasi iure voluptatum dolore alias sapiente. At tempora vitae tempore voluptas praesentium nulla temporibus. Et, iure eveniet quas saepe placeat, facilis doloribus laboriosam laborum atque numquam ullam!
            Asperiores molestias incidunt, tenetur dicta ut dolores harum debitis. Unde modi culpa harum, animi fugiat, laboriosam perspiciatis vel eum amet minus tempora esse quia itaque cum. Magni ullam quae nam.
            Accusamus eos facere architecto asperiores odio quia molestiae quod facilis, reiciendis nisi fugit porro aliquam suscipit ea inventore pariatur. Ullam, voluptas consequatur sed earum illum impedit tenetur culpa vero hic!
            Molestiae a vero accusamus illum praesentium mollitia? Aliquam, iste velit molestiae cum ratione ipsam eveniet possimus sequi nihil neque inventore deleniti eos soluta, tenetur quam natus! Odio nemo nam dolores?
            Repellendus eos quasi similique, dolores, officiis vero autem architecto quas fugiat reprehenderit, nesciunt vitae! Natus laborum, optio quam eaque commodi, illum qui reprehenderit, dolor iusto accusantium quae veritatis voluptatem ab.
            Eos necessitatibus quidem dignissimos nesciunt est, numquam voluptate! Assumenda eius quo nulla fuga ullam harum velit esse nemo! Quidem distinctio at modi doloribus mollitia pariatur repellat possimus vel eligendi sunt!
            Odio, animi quos? Accusamus vero qui molestias autem animi quisquam perferendis magnam aspernatur aliquam hic, inventore exercitationem itaque expedita quod ullam eum aliquid modi, deserunt quo, cumque similique at dicta.
            Quasi hic sed recusandae laboriosam odit fuga error officiis voluptates fugiat amet labore quia accusantium, nulla esse perferendis sit saepe beatae. Dignissimos iure cumque animi eius sint magnam hic nisi.
            Fugit provident quisquam, fugiat incidunt aut deserunt saepe perspiciatis eos explicabo nisi tempore modi expedita harum aliquid doloremque perferendis! Reiciendis ipsa, iste quae molestiae beatae architecto sapiente facilis sed in!
            Quo aut a in odit iure similique quas recusandae! Expedita voluptas porro quod impedit deleniti sapiente aperiam iusto quas, nihil, consequatur eius vero. A eius aperiam mollitia adipisci atque eum.
            Porro officia natus minima. Id ad vero est officia adipisci deleniti doloribus fugiat excepturi porro facere molestias tempore consequuntur, placeat optio tempora nisi doloremque aut atque? Adipisci maiores asperiores earum?
            Consequatur exercitationem vel et eius, aut esse voluptatum, aliquid impedit, reiciendis veritatis dolores neque. Placeat enim excepturi ea. Voluptatibus esse dolores atque natus impedit porro ipsa vitae et repellendus doloremque.
            Facilis alias at, ullam tempora sit similique rem aliquid enim earum quibusdam autem maiores incidunt est repellat excepturi eligendi non asperiores natus et quisquam dignissimos atque! In ratione voluptatem soluta.
            Laborum non minima ullam quas corrupti illum repellendus quia amet quo beatae dolorem doloribus nostrum et impedit corporis eveniet eaque accusantium reiciendis, officia voluptas similique alias quaerat delectus. Qui, animi.
            Obcaecati, natus similique? Pariatur eaque suscipit aperiam nesciunt vel est numquam. Animi dolores error ipsam numquam officia. Quo fugit voluptatum nesciunt provident quam obcaecati error! Obcaecati quam veniam laboriosam quas.
            Quaerat illum consequuntur, porro eum qui inventore dolores obcaecati deserunt aperiam dolorem quisquam sit explicabo eaque saepe excepturi repellendus soluta molestias cumque officia officiis distinctio ex, atque sequi! Aliquam, cum.
            Repellat, sapiente debitis? Cum a dolore, cupiditate iste explicabo ratione enim, dolor, nihil illum quo minima velit? Adipisci earum hic ratione unde accusamus dolores iusto, ea eveniet alias eum sint.
            Debitis pariatur illo nam at sit aliquid rerum nostrum dolorem, iure facere perferendis iusto reiciendis harum ipsa tempora temporibus praesentium, dolor ut deleniti earum dignissimos? Modi aspernatur aut porro accusantium.
            Cum hic in, quam eligendi qui deleniti ab. Totam, adipisci temporibus ullam impedit aliquid a nisi animi unde nesciunt quisquam rerum pariatur veniam numquam voluptatibus sed nam, repellat ea odit!
            Incidunt id vitae et itaque. Corrupti est dignissimos quasi, natus aperiam explicabo fugiat nihil praesentium deserunt ipsa. Deserunt dignissimos, illum molestias magnam dolorem, nihil voluptates accusamus ut officiis nesciunt placeat.
            Voluptas at deserunt est non error iure magni, cumque temporibus laudantium tempore molestias ex vitae minus natus esse ut. Nemo minima ducimus ipsam, consequuntur laudantium officia doloremque in exercitationem iste.
            Maiores soluta quia doloribus velit temporibus pariatur, asperiores, ex tenetur eum eius delectus! Eum, iure officiis voluptatibus neque molestias aliquam! Officiis, minus vero impedit quam id magni dolores et alias.
            Doloremque quasi vero esse voluptatem molestiae nesciunt temporibus saepe, recusandae, officia odit accusantium voluptates voluptatum, rerum ipsam culpa ullam labore! Delectus vero fugiat omnis! Voluptas reiciendis ipsa pariatur placeat iure.
            Reiciendis repellendus eaque dolore adipisci? Alias minima cum a magni, natus fugiat neque corporis nam explicabo placeat tempora est assumenda totam, sunt autem doloribus unde veniam mollitia numquam illo commodi.
            Facilis, esse? Magni natus incidunt ipsam earum suscipit voluptate iure quas cum ipsa a cupiditate rerum, cumque explicabo labore eum voluptatibus voluptatum! Quod qui alias iste repudiandae inventore. Fugiat, tempore?
            Quasi facilis aspernatur est nulla. Eaque quia sit pariatur voluptatum dolorum numquam praesentium, aliquam dignissimos debitis illo accusantium qui expedita est quasi recusandae assumenda nobis nesciunt dolor commodi perspiciatis saepe.
            Asperiores odit labore illo sunt sequi nesciunt iste optio excepturi, aliquid sapiente dolor natus cum modi ipsam repudiandae velit harum nulla quidem facilis illum recusandae dolorum libero unde? Sapiente, ea.
            Ratione, blanditiis mollitia autem incidunt cumque veritatis fuga inventore esse officia nam quasi rerum dolorum eos dolorem distinctio molestiae, quae aperiam corporis expedita accusantium nulla tempore hic. Laborum, neque animi?
            Dicta cum odio, quia vero rem nisi illum dolores consequuntur iusto quibusdam repellendus ratione, nulla praesentium earum omnis quidem pariatur voluptates dolore possimus quos enim aliquid error! Iste, quasi itaque.
            Officiis ut delectus ab optio earum vero molestias libero ipsum maiores, eum accusantium nisi voluptatibus quis repellendus sed vitae voluptatum, quaerat ad! Cum voluptates tempore laudantium expedita consequatur est accusantium!
            Sequi explicabo a asperiores minus dolorem nostrum aspernatur quas tempora accusantium. Explicabo dicta id natus ea laboriosam neque sequi tempora architecto! Ipsa ut perspiciatis minus fugiat veritatis impedit provident nisi.
            Illo alias quibusdam, magni amet nobis distinctio earum! Repellendus facere iure nobis autem, optio voluptas quis omnis quasi enim deserunt minima consequuntur rerum dolore ullam consectetur voluptatem velit aliquam ipsum?
            Corporis rerum dolore laudantium veritatis ex deserunt tempore odio consequatur non itaque aperiam sunt eaque ratione aliquam consectetur, quo repellendus ea? Dolor quam nobis expedita, soluta nemo voluptate asperiores vel.
            Soluta magni, aliquid itaque ullam id vero pariatur velit maxime fuga placeat, hic aliquam sit cumque et delectus alias. Molestiae voluptate vitae sapiente corrupti hic! Explicabo minima voluptatem delectus perferendis.
            Sint harum nam perferendis repellat, doloribus tempore eius enim unde tempora. Voluptates, nisi veritatis necessitatibus molestias nobis earum repudiandae quidem ipsam, eius soluta labore ducimus rerum aliquid et praesentium ullam?
            Reprehenderit, in! Quis commodi numquam ex et nulla possimus sequi odit quos est, delectus, sint dolorem quam impedit? Officiis cum delectus quas temporibus quibusdam, voluptatum corporis sunt at harum rem.
            Corrupti, quos molestias eius, ducimus temporibus debitis illo magnam illum cupiditate quod aut harum non! Nesciunt, non. Provident, assumenda necessitatibus! Odit tempore eius, ducimus nihil voluptatem consectetur natus ad harum.
            Molestias libero voluptates dolorem minima cum odio fugiat iure, sapiente soluta ullam animi tenetur ducimus nostrum alias blanditiis facere dolor beatae! Fugit facilis maiores nesciunt consequuntur doloremque molestias beatae in.
            Eum, sapiente nam! Nisi nesciunt fugit voluptate nihil in hic dolores beatae nemo doloremque quaerat ipsam vero modi sint aut exercitationem facilis provident, nobis, eveniet architecto voluptatum similique soluta! Perferendis?
            Eligendi ex asperiores recusandae aperiam esse saepe quae dolore assumenda temporibus magnam neque accusantium ipsa itaque suscipit, unde praesentium nam, quos placeat animi accusamus maiores quibusdam! Ut ipsum facere libero!
            At ut excepturi voluptas reiciendis, dolore perferendis eligendi architecto adipisci? Facilis animi excepturi atque minima voluptate labore, iste possimus vero nulla quidem. Natus exercitationem quod voluptate reprehenderit provident, autem laboriosam.
            Facilis voluptatum cupiditate laudantium nesciunt, adipisci debitis neque impedit necessitatibus nam labore iste voluptate assumenda architecto, in, provident earum tempora a repellat velit beatae minus! Quos aliquid nisi at veritatis.
            Accusamus dolor sint perspiciatis odit inventore reiciendis sunt in nulla perferendis ut sapiente enim vitae et, aliquam, aperiam iste debitis quis laudantium amet id assumenda fugit. Delectus facere dignissimos fugiat.
            Rem illum tempore quod quibusdam odit explicabo minima quisquam in quo reprehenderit, architecto optio. Assumenda, ea numquam in illum voluptatibus voluptatem nam eos consectetur cum alias repellat doloribus earum. Distinctio?
            Tempora eum maiores nulla fugiat laboriosam? Cupiditate laboriosam, vero et commodi doloribus odit incidunt velit sapiente consectetur in fugit neque, quis nihil perferendis. Fugit maxime voluptatum ea soluta, illo tempore!
            Inventore aperiam at, nemo distinctio soluta maxime blanditiis, quia quibusdam, quod porro aspernatur. Rerum suscipit saepe illo aspernatur dignissimos optio! Eos perspiciatis omnis atque expedita natus quidem doloremque, quae inventore!
            Quasi architecto aliquid explicabo sed ad exercitationem itaque hic suscipit earum sit deleniti, enim veniam qui dolorem voluptas vero labore minima maiores id laudantium libero saepe. Itaque inventore eaque dicta.
            Doloribus, modi? Labore libero expedita ad accusamus accusantium dicta suscipit doloremque, sapiente ducimus deserunt nostrum facere non necessitatibus quasi tenetur aut animi magni minus odio, vero voluptatem quidem porro explicabo?
            Totam quisquam consequatur laudantium ipsam ipsum voluptatem perspiciatis nesciunt saepe tenetur ad. Eos laboriosam ad cupiditate incidunt quam maiores doloremque quis earum ratione illum a, nisi, praesentium dignissimos, quae repellat?
            Molestias, veniam quia, obcaecati exercitationem iste perspiciatis magnam quasi at, ducimus consectetur expedita reprehenderit quae earum facere commodi temporibus rem nam! Quidem quaerat, porro harum provident maiores aliquam ea vitae?
            Perspiciatis quis aperiam excepturi optio tempore error hic vero exercitationem delectus nobis saepe, aliquid, expedita provident, aut ipsam quaerat autem laborum temporibus enim atque. Cumque eum atque velit alias voluptates.
            Facilis praesentium odit harum recusandae incidunt in tenetur id quas quos cumque aut soluta animi quae natus, nobis, doloribus officia et distinctio. Ipsa dolores voluptatem vitae incidunt sit repellat nam?
            Asperiores, aspernatur eius id blanditiis impedit velit maiores tempora distinctio vero repellendus error quod quasi. Laudantium, animi repellat voluptate laborum soluta doloremque veniam amet in? Voluptates inventore omnis optio necessitatibus!
            Aliquid ratione magnam optio pariatur facilis error eos placeat quas possimus suscipit quibusdam culpa, a cupiditate ex repudiandae modi minima fugiat, recusandae nisi iste ad. Beatae debitis iure tempora aliquid!
            Incidunt repellendus nemo rerum expedita libero, minus aspernatur animi mollitia fugiat facilis consequuntur ipsa odit ducimus placeat possimus commodi. Error sed repudiandae atque inventore pariatur officia aspernatur explicabo quam minima?
            Dolorum quis animi recusandae molestias laborum, tempore, doloremque ab ea soluta accusamus culpa consequatur porro, vitae sapiente! Placeat aut, mollitia numquam ullam accusantium temporibus, dolor blanditiis pariatur tempore ad ea?
            Dicta maiores aspernatur ab soluta amet impedit, aut nemo culpa vitae, maxime suscipit! Reiciendis minus minima illo vero dicta velit mollitia iusto commodi quia aspernatur asperiores deserunt nulla, alias qui?
            Autem, voluptas. Enim ducimus, placeat est eaque illum impedit. Ipsum odit, consectetur fuga iure ratione doloremque reprehenderit voluptatibus asperiores ipsam distinctio? Sint dolorum alias autem, consequuntur ad similique ullam quae.
            Fugiat aspernatur rem facere voluptatum nihil debitis vitae, voluptates eum sint quae numquam fugit earum, neque beatae sit, ipsum sequi amet corporis et. Delectus recusandae placeat distinctio quasi qui esse!
            Quia assumenda cupiditate et quas fugit nostrum laboriosam quos. Eum eligendi, ratione architecto perspiciatis magnam laudantium eius distinctio optio, non neque nesciunt repellat error assumenda molestiae voluptate blanditiis eos veritatis!
            Expedita veniam, ea laboriosam laudantium possimus consequuntur perspiciatis consequatur facere minus ex molestiae eius maiores incidunt hic. Nemo corrupti deserunt accusantium recusandae nostrum reiciendis, magnam earum aperiam necessitatibus repellat consequatur?
            Animi consequatur modi eaque aperiam, ab neque delectus distinctio ipsa accusantium illum explicabo placeat exercitationem, sapiente laudantium laborum perferendis! Optio dolorem officia saepe voluptatibus temporibus nobis facilis totam sit quaerat.
            Dolor vero fugiat quas veniam laborum repudiandae repellendus itaque culpa molestias quis? Voluptates, esse. Libero distinctio nisi sapiente. Minima est molestiae numquam corporis possimus soluta praesentium sunt voluptatem ex officiis?
            Voluptatibus quas ea quam minima, quaerat magnam vel repellendus consectetur recusandae minus, odit modi eos animi impedit. Possimus, dolores, dicta quidem corrupti esse a saepe maxime ea praesentium, nostrum id?
            Ullam, nemo distinctio. Minus excepturi molestias blanditiis iusto nostrum, culpa ipsam laboriosam maxime sapiente enim facere porro atque deserunt, facilis nobis. Magni iste assumenda cum? Ipsam sunt quisquam veritatis aut.
            Ducimus ullam hic cum assumenda odit. Asperiores laborum sapiente libero, inventore necessitatibus ipsam quaerat, harum ipsum reiciendis suscipit minima nemo adipisci dolor excepturi, alias exercitationem? Voluptatem debitis modi culpa fugit.
            Eligendi debitis, voluptatibus, perspiciatis minus laboriosam architecto ab soluta dolorum necessitatibus natus deserunt doloremque adipisci, distinctio libero aliquam porro accusantium velit dolorem eveniet! Harum facere impedit a laudantium sint architecto.
            Eaque, impedit architecto, consequuntur esse placeat expedita omnis fugit soluta temporibus deleniti maxime maiores sequi? Iste et unde odio error eaque aliquid in quidem sit reiciendis? Laboriosam ipsam amet ducimus.
            Eos quos quae repellendus esse consequuntur, ratione animi, maiores iure quisquam numquam rerum! Consectetur assumenda, odio autem ipsam aut officiis nulla corrupti perspiciatis possimus dicta ullam rerum aliquam reprehenderit repellat.
            Pariatur sequi deleniti qui dicta perspiciatis provident libero rem. Porro, sint magnam perferendis, atque cumque asperiores reprehenderit ullam assumenda inventore numquam laboriosam eaque odio eum. Facere illo accusantium deleniti nemo.
            Sint animi quam, eius tenetur suscipit libero voluptatibus neque aperiam ducimus accusamus possimus architecto, veniam dolores saepe sed perspiciatis provident. Quaerat quam dolores beatae atque, dolorum qui cum aperiam error.
            Fugiat, earum? Blanditiis doloribus suscipit ullam voluptate porro perferendis? Sed neque reprehenderit maxime, quidem odio ullam molestias rem sapiente eius facilis debitis tenetur, possimus deserunt fugit autem, in dolores! Voluptatibus.
            Error, possimus suscipit dolor quidem voluptatum reprehenderit delectus consectetur! Voluptatum sequi eum qui dolorem odio dolor iure! Qui enim repellendus doloremque nihil fuga similique? Corporis culpa ab nemo perferendis eum.
            Voluptatem perferendis iusto, obcaecati quisquam dolores explicabo eos cupiditate quos fuga ut laudantium harum ea esse placeat! Fugit quia animi neque commodi illo unde tenetur consequuntur autem, dolor fuga quisquam.
            Quis laudantium nisi facilis consequatur, excepturi, assumenda neque porro facere ipsum perferendis odio odit laborum animi, iure sit dignissimos autem consectetur nulla velit adipisci necessitatibus quaerat perspiciatis. Est, corrupti nobis!
            Sint at officia eveniet, vero culpa doloribus sit rem officiis enim fuga, iusto quaerat temporibus eos dolorum, velit incidunt tempora? Officia amet adipisci recusandae, eum alias nesciunt ipsa dolores ad!
            Blanditiis natus tenetur eius labore delectus, amet ratione officia, commodi sint obcaecati omnis cumque deleniti recusandae dicta at modi doloremque ipsam voluptate unde reiciendis eos, magni perferendis. Rem, quia itaque?
            Dolores illum veritatis odio quaerat reiciendis repellendus, possimus dignissimos autem qui nesciunt quasi repudiandae commodi aliquam, numquam saepe quia deleniti ullam cumque. Earum provident molestias culpa? Vitae, mollitia expedita. Et!
            Voluptate quae asperiores voluptatibus odio et quas, voluptatum sed perferendis dicta mollitia aperiam inventore quo hic rem, nemo labore maxime possimus error neque eum porro totam. Facilis earum enim atque!
            Cupiditate quis obcaecati eos nesciunt tenetur fugit repellat deleniti sunt vitae beatae ad pariatur delectus, facere incidunt, neque sequi porro similique. Quas obcaecati praesentium provident velit, perspiciatis officia culpa necessitatibus.
            Assumenda, tempore expedita! Dolorem numquam ducimus delectus itaque facilis error aspernatur necessitatibus in ullam veritatis aliquam odit ad cum laborum eum voluptatum labore praesentium nihil, aliquid, quos dolor id? Praesentium!
            Nesciunt nemo iusto veniam voluptatum sunt ipsum, fuga laboriosam repellat autem aliquid, quidem laborum quibusdam consequuntur modi exercitationem, culpa maxime? Reiciendis tempore perspiciatis dolore amet sapiente earum neque odio quaerat!
            Quis totam sequi, tempora doloribus, labore accusantium aliquid dicta error eaque aliquam veniam nesciunt incidunt quidem blanditiis quam soluta voluptate recusandae maiores voluptatibus similique. Repudiandae cum maiores doloremque quibusdam nesciunt?
            Esse vero ratione aut ab, modi numquam eos dolorum, alias non qui quis. Praesentium quibusdam ut at nesciunt quasi optio, totam obcaecati. Aspernatur voluptas placeat inventore, at odit ipsam cupiditate.
            Consectetur tempore iste, natus minima fugit ratione placeat. Hic dolorum placeat mollitia blanditiis quasi iste, nobis laboriosam qui minus id tempore incidunt voluptatibus sed inventore vitae quia, nulla in minima.
            Praesentium culpa, doloremque rerum dignissimos vel nam unde soluta ipsum est expedita minus nesciunt pariatur magnam voluptatibus deserunt cupiditate. Ullam necessitatibus incidunt quis pariatur autem nemo officiis molestiae cumque in.
            Veritatis at, numquam culpa, omnis voluptates consequuntur, perferendis molestiae quos veniam ipsum iste blanditiis saepe debitis eligendi eveniet. Incidunt, perferendis. Ullam reiciendis nemo sint nam voluptatum, natus iusto. Aperiam, eos!
            Eius magni accusantium alias, ab voluptate earum inventore blanditiis maiores omnis aperiam, consequuntur ipsam soluta nihil sit fugiat! Nulla saepe quis temporibus voluptatem assumenda incidunt dignissimos rerum facilis accusamus similique.
            Enim dicta aliquid quae, similique sint hic explicabo? Quia deleniti illum sed repellendus aliquid nisi voluptates pariatur exercitationem quas porro dolor quam dolores corrupti laudantium natus possimus, officia, maiores officiis?
            Veritatis omnis ipsam quia nisi recusandae, quos modi hic, officiis iste perferendis iure maxime quibusdam itaque tempora laudantium consectetur et placeat. Fugit rem quo esse reiciendis vel, aut ipsa laboriosam.
            Illum veniam nulla ipsum ducimus, maiores sequi autem eius placeat quia, temporibus deserunt fugit quasi molestiae facilis ex ullam quo debitis. Rerum rem doloremque omnis ullam voluptatibus enim esse tempore.
            Quod itaque eaque repellat debitis fuga quisquam aperiam. Harum hic, repudiandae necessitatibus, numquam ex, error libero ad expedita recusandae facilis adipisci quia laboriosam saepe porro quae in ab ratione officia!
            Pariatur, nostrum! Nostrum doloremque reiciendis ad laboriosam temporibus, optio pariatur amet provident sequi unde ex consequatur vitae animi modi eum natus nesciunt at esse et adipisci ipsam dicta exercitationem. Libero!
            Quos doloribus similique adipisci sint aperiam provident! Temporibus perferendis, alias magni voluptate magnam sit reiciendis ipsa itaque inventore aut ipsum laboriosam et, quas optio nesciunt, ad voluptatem illum id saepe.
            Possimus deserunt libero incidunt praesentium recusandae magni delectus nam. Molestiae maiores sapiente libero illum perspiciatis iure a atque esse debitis dolorem explicabo facere nostrum, vel optio tempore cum odio voluptas!
            Velit praesentium reiciendis nesciunt temporibus tempora, placeat ratione animi sint labore itaque ipsa ex aliquam quibusdam neque quo adipisci facilis minus asperiores enim eum assumenda hic aperiam quisquam. Excepturi, minima?
            Perspiciatis provident odio optio commodi sint voluptatum? In atque voluptatum dolor aliquam ad error quos corporis ab voluptates voluptate adipisci blanditiis animi nulla, maiores ipsa eos autem nobis tenetur deleniti!
            Fugit sint architecto possimus ab beatae facilis nam distinctio tempora dicta, quos expedita eligendi praesentium. Fugit vel nobis nemo hic quia beatae cum sint excepturi, magni at rem et asperiores.
          </div>
          <div className="col-span-3"></div>
        </div>
      </main>

    
    </Layout>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "src/pages/posts");
  const filesnames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filesnames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, "utf-8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const posts = files.map((file) => {
    return {
      path: `/posts/${file.filename.replace(".mdx", "")}`,
      title: file.matter.data.title,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
