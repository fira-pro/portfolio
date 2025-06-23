import {
  Container,
  styled,
  Typography,
} from "@mui/material";
import {
  drawerWidth,
  mobileBreakPoint,
} from "src/constants";
import DrawerHeader from "./DrawerHeader";
import { useContext } from "react";
import { LayoutContext } from "./AppLayout";

const StyledMain = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // Above mobile break point, add a negative left margin with a value of drawer width
  // to make it look the drawer isn't there when it is closed. when it is open remove the left margin
  // which naturally pushes the the content to the right
  [theme.breakpoints.up(mobileBreakPoint)]: {
    marginLeft: `-${drawerWidth}px`,
  },
  variants: [
    {
      props: ({ open }) => open,
      style: {
        [theme.breakpoints.up(mobileBreakPoint)]: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration:
              theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    },
  ],
}));

export default function Main() {
  const { isDrawerOpen } = useContext(LayoutContext);
  return (
    <StyledMain open={isDrawerOpen}>
      <DrawerHeader />
      <Container maxWidth="md">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Corporis debitis unde recusandae
          molestias nisi a quisquam fuga non doloribus
          obcaecati rerum quo ratione aliquid quam voluptate
          sapiente, odit dolorem maxime? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Qui,
          cumque. Facere fuga voluptatum tempore nam eum
          alias quisquam fugiat laborum iure saepe, porro ab
          perspiciatis libero voluptas omnis obcaecati sunt.
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Natus earum aliquid quis molestiae, dolorum
          quibusdam voluptates laborum veniam veritatis ut
          dolores unde debitis quas quaerat ratione
          laudantium. Ullam, eligendi recusandae? Dolorem
          facilis possimus sequi modi rem ullam culpa
          pariatur quia sint, deserunt accusamus quos
          molestias excepturi ipsa atque repellendus, saepe
          vel ratione voluptatum deleniti temporibus aut
          fugiat laboriosam? Ipsam, doloremque? Provident
          ipsum aperiam iure beatae quod minima soluta neque
          blanditiis. Architecto nobis id, quis non
          necessitatibus a, voluptatibus aliquam, eveniet
          dolorem perspiciatis doloremque hic illum at rerum
          in sunt pariatur. Laudantium aspernatur ipsa
          necessitatibus at animi, magnam in iure veritatis
          voluptate doloremque ratione soluta facilis! Quia
          libero dicta voluptatem! Voluptatum error quo
          dolorum vel nisi veritatis voluptates facilis fuga
          labore! Praesentium dolores, dignissimos maiores
          quo eius, itaque esse numquam voluptate quibusdam
          sint ipsum magnam possimus totam impedit. Adipisci
          sit facilis sapiente aspernatur, qui soluta
          voluptas, magni rerum blanditiis ipsam voluptate!
          Doloremque ad nisi porro itaque ducimus debitis
          voluptatum illum assumenda vero autem molestias ut
          accusantium eos neque ratione, fuga nihil nesciunt
          nemo explicabo reiciendis? Sequi eum quidem
          explicabo laborum deserunt? Quis unde at animi,
          odio aut modi natus asperiores quae quos, error
          temporibus corporis nisi magnam ipsum minus magni
          fugit! Qui perspiciatis itaque impedit cum laborum
          molestias velit amet tenetur. Voluptatibus quo
          amet blanditiis nesciunt consequuntur? Laborum
          asperiores odit magnam tenetur veritatis! Minima
          nemo sint voluptate fugit itaque illum architecto
          temporibus. Alias exercitationem molestiae sint
          impedit eum voluptate a voluptatibus. Sunt
          cupiditate architecto praesentium reprehenderit
          ipsum animi asperiores totam dolores quidem dicta
          iure deserunt, eaque omnis aperiam, quas vitae
          voluptatibus alias doloribus voluptate nulla id.
          Incidunt, illo? Praesentium, impedit perferendis!
          Est veniam et consectetur, vel dicta officiis
          laborum impedit incidunt minima ex inventore
          expedita odit tempore temporibus suscipit
          accusantium illo voluptate fugiat quaerat harum
          cum dignissimos? Accusamus eum pariatur dicta.
          Voluptate sed ex repudiandae rerum quis laboriosam
          eos hic ut natus enim, maxime consequuntur ea
          obcaecati vero? Quidem odio ullam quae nesciunt
          cumque, natus blanditiis voluptatibus dignissimos
          mollitia consectetur sint? Dolor, eos dolores
          veritatis ducimus repellendus tempora expedita
          suscipit repellat? Sapiente, nobis dolorem.
          Incidunt commodi hic pariatur asperiores amet
          quibusdam eius atque delectus est, quas reiciendis
          omnis neque dolores sit. Repudiandae quibusdam eos
          ratione blanditiis delectus ipsa quidem veniam
          error totam, sapiente nobis repellendus omnis quia
          rem eaque vero ab voluptatum non, doloremque amet,
          voluptas doloribus numquam! Voluptas, corrupti
          aspernatur. Alias adipisci hic reprehenderit
          sapiente a quibusdam iste laudantium qui similique
          ducimus, possimus nulla ut cum cumque inventore
          quisquam accusantium et repellat? Eos quisquam ut
          blanditiis perspiciatis corrupti placeat omnis?
          Commodi earum sint ipsum quo non maiores quam
          magnam repellat totam veniam voluptate ex tenetur
          labore pariatur ipsam a eveniet, esse neque enim
          natus! Placeat quo aut laboriosam consequatur
          esse. Earum non nobis rerum esse alias distinctio
          omnis vero dignissimos animi assumenda neque
          voluptatibus asperiores odit quia voluptatem in
          repellendus commodi itaque aut, est iure
          voluptatum laboriosam accusantium maxime.
          Mollitia? Eaque eveniet excepturi odio fuga maxime
          consequatur error nulla quisquam, laborum quo
          illum possimus totam rem corporis nam asperiores.
          Explicabo, autem. Aperiam modi accusantium unde
          nam quae id voluptate odit? Nihil praesentium at
          accusamus hic dolorem minima recusandae molestiae
          cupiditate nisi ratione sed totam culpa vitae,
          excepturi quam quas porro iste repudiandae modi
          sit non aut minus provident esse. Nisi. Cumque ex
          quas illo vitae maxime aut aliquid officia. Labore
          a, quas perspiciatis mollitia sapiente delectus
          velit id adipisci asperiores architecto! Molestiae
          maxime reiciendis earum, velit similique quasi
          vero eveniet. Incidunt tempora reprehenderit ad
          consequuntur assumenda fugiat inventore! At
          accusantium tenetur a expedita iste consequuntur
          quam porro iure nesciunt, voluptatum non
          doloribus! Ipsam ducimus corrupti at facilis,
          vitae corporis ea. Suscipit reiciendis autem
          fugiat dolore et inventore repellat veniam
          voluptatem amet optio debitis odit at dolorem
          cumque libero corporis labore, non placeat
          incidunt eveniet. Corrupti animi odit nam at
          consequatur? Facere quisquam a deserunt. Quibusdam
          dolor repudiandae exercitationem aliquam odio ut
          voluptas assumenda nisi accusantium sit ex
          deserunt nihil numquam ipsum sunt id facere animi
          tempora omnis magni, corporis veritatis. Aliquid
          alias autem, a nobis sit dolore incidunt! Totam
          deleniti inventore quas. Recusandae aperiam unde,
          ut impedit commodi, vitae, eaque quam labore
          consequatur aspernatur modi incidunt quas ipsa
          nesciunt doloribus. Quaerat ipsam esse pariatur
          molestiae magnam minima accusantium reprehenderit
          quod laboriosam est, natus molestias quo ratione
          debitis soluta sed maiores similique.
          Necessitatibus, iure soluta quae ad cum quos
          exercitationem a. Nostrum non ut id aut earum?
          Eius nesciunt neque nostrum quas suscipit, fugit
          ab quos odio eum, officiis fugiat? Rerum magnam at
          ea facilis ad eaque iste, suscipit quasi sint.
          Placeat corporis assumenda deserunt cum architecto
          soluta, magni veritatis, asperiores eos quia
          sapiente vero enim corrupti maiores unde hic?
          Beatae, quis. Corrupti accusantium, sit sapiente
          neque illum excepturi alias voluptate. Quas
          consequuntur reiciendis consectetur! Sapiente
          ducimus repellendus est, deleniti commodi ipsam
          illo, sequi necessitatibus officia adipisci
          distinctio excepturi nulla hic quidem inventore,
          eius aspernatur! Reprehenderit aliquid ad voluptas
          temporibus distinctio. Doloribus debitis eum sed
          sint. Exercitationem eos quaerat illo sit
          distinctio. Enim, sapiente debitis et repellendus
          cum, beatae tenetur vel, asperiores aperiam
          voluptates saepe voluptatibus natus quaerat
          consequuntur nisi. Voluptatum! Voluptas facere
          nesciunt possimus accusantium aliquid magni ab
          quasi consectetur quis quia, quo temporibus
          quisquam quas sit culpa magnam omnis minima
          reiciendis itaque eligendi consequatur
          perspiciatis quos! Non, aspernatur quia?
          Consectetur quia hic dicta reprehenderit delectus
          magni obcaecati, inventore deserunt consequatur
          sequi placeat velit iusto quibusdam optio
          dignissimos! Esse sit doloremque est, amet quam
          vitae assumenda sapiente, magnam atque illum rerum
          dolorum sit? Provident possimus dolor a esse
          temporibus eligendi ea sit! Ut, nisi? Minus quidem
          quasi ad reprehenderit animi laborum vero
          veritatis quisquam sit inventore? Dolores,
          blanditiis sit corporis, earum sequi quisquam, non
          hic quam voluptatibus ea aspernatur ipsam quia
          cupiditate! Fuga minus fugiat, soluta delectus
          culpa consequatur illum maiores
        </Typography>
      </Container>
    </StyledMain>
  );
}
