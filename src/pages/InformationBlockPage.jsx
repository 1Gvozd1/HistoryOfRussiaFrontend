import {
    Box,
    Stepper,
    Step,
    StepLabel,
    Typography,
    StepContent,
    Button,
    Paper,
    styled,
    Card,
    Container,
    CardContent,
    CardMedia,
    Tabs,
    Tab,
    Chip,
    Divider,
    Avatar,
    Rating,
    Grid,
    LinearProgress,
    linearProgressClasses,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import PropTypes from "prop-types";
import { Fade } from "react-reveal";
import { Quiz } from "UI/Quiz";
import Comment from "UI/Comment";
import QuestionExplanation from "UI/QuestionExplanation";
import CommentAdd from "UI/CommentAdd";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useLocation } from "react-router-dom";
import { Context } from "app/Hooks/Context";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography color="white">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) + :not(style)": {
        marginTop: theme.spacing(4),
    },
}));

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function textToArray(text, size) {
    // Разбиваем текст на слова и сохраняем в массив
    const wordsArray = text.split(" ");

    // Создаем пустой массив для хранения строк
    const resultArray = [];

    for (let i = 0; i < wordsArray.length; i += size) {
        const chunk = wordsArray.slice(i, i + size);
        resultArray.push(chunk.join(" "));
    }

    return resultArray;
}

const content1 = [
    {
        label: ["Видео", "Video"],
        description: "https://youtu.be/PIR-v6H9zj8",
    },
    {
        label: ["Конспект", "Abstract"],
        description: `В год 6415 (907). Пошел Олег на греков, оставив Игоря в Киеве; взял же с собою множество варягов, и славян, и чуди, и кривичей, и мерю, и полян, и северян, и древлян, и радимичей, и хорватов, и дулебов, и тиверцев, известных как толмачи: этих всех называли «Великая скифь». И с этими всеми пошел Олег на конях и в кораблях; и было кораблей числом две тысячи. И пришел к Царьграду; греки же замкнули Суд, а город затворили…

        И повелел Олег своим воинам сделать колеса и поставить на колеса корабли. И когда поднялся попутный ветер, подняли они в поле паруса и двинулись к городу. Греки же, увидев это, испугались и сказали, послав к Олегу: «Не губи города, согласимся на дань, какую захочешь». И остановил Олег воинов, и вынесли ему пищу и вино, но не принял его, так как было оно отравлено. И испугались греки и сказали: «Это не Олег, но святой Дмитрий, посланный на нас Богом». И потребовал Олег выплатить дань на две тысячи кораблей: по двенадцать гривен на человека, а было в каждом корабле по сорок мужей…
        
        Цесари же Леон и Александр заключили мир с Олегом, обязались уплачивать дань и присягали друг другу: сами целовали крест, а Олега с мужами его водили присягать по закону русскому, и клялись те своим оружием и Перуном, своим богом, и Волосом, богом скота, и утвердили мир. И сказал Олег: «Сшейте для руси паруса из паволок, а славянам шелковые», и было так. И повесили щиты свои на вратах в знак победы, и пошел от Царьграда. И подняла русь паруса из паволок, а славяне шелковые, и разодрал их ветер. И сказали славяне: «Возьмем свои толстины, не даны, знать, славянам паруса шелковые». И вернулся Олег в Киев, неся золото и паволоки, и плоды, и вино, и всякое узорочье. И прозвали Олега Вещим, так как были люди язычниками и непросвещенными.В год 6415 (907). Пошел Олег на греков, оставив Игоря в Киеве; взял же с собою множество варягов, и славян, и чуди, и кривичей, и мерю, и полян, и северян, и древлян, и радимичей, и хорватов, и дулебов, и тиверцев, известных как толмачи: этих всех называли «Великая скифь». И с этими всеми пошел Олег на конях и в кораблях; и было кораблей числом две тысячи. И пришел к Царьграду; греки же замкнули Суд, а город затворили…

        И повелел Олег своим воинам сделать колеса и поставить на колеса корабли. И когда поднялся попутный ветер, подняли они в поле паруса и двинулись к городу. Греки же, увидев это, испугались и сказали, послав к Олегу: «Не губи города, согласимся на дань, какую захочешь». И остановил Олег воинов, и вынесли ему пищу и вино, но не принял его, так как было оно отравлено. И испугались греки и сказали: «Это не Олег, но святой Дмитрий, посланный на нас Богом». И потребовал Олег выплатить дань на две тысячи кораблей: по двенадцать гривен на человека, а было в каждом корабле по сорок мужей…
        
        Цесари же Леон и Александр заключили мир с Олегом, обязались уплачивать дань и присягали друг другу: сами целовали крест, а Олега с мужами его водили присягать по закону русскому, и клялись те своим оружием и Перуном, своим богом, и Волосом, богом скота, и утвердили мир. И сказал Олег: «Сшейте для руси паруса из паволок, а славянам шелковые», и было так. И повесили щиты свои на вратах в знак победы, и пошел от Царьграда. И подняла русь паруса из паволок, а славяне шелковые, и разодрал их ветер. И сказали славяне: «Возьмем свои толстины, не даны, знать, славянам паруса шелковые». И вернулся Олег в Киев, неся золото и паволоки, и плоды, и вино, и всякое узорочье. И прозвали Олега Вещим, так как были люди язычниками и непросвещенными.В год 6415 (907). Пошел Олег на греков, оставив Игоря в Киеве; взял же с собою множество варягов, и славян, и чуди, и кривичей, и мерю, и полян, и северян, и древлян, и радимичей, и хорватов, и дулебов, и тиверцев, известных как толмачи: этих всех называли «Великая скифь». И с этими всеми пошел Олег на конях и в кораблях; и было кораблей числом две тысячи. И пришел к Царьграду; греки же замкнули Суд, а город затворили…

        И повелел Олег своим воинам сделать колеса и поставить на колеса корабли. И когда поднялся попутный ветер, подняли они в поле паруса и двинулись к городу. Греки же, увидев это, испугались и сказали, послав к Олегу: «Не губи города, согласимся на дань, какую захочешь». И остановил Олег воинов, и вынесли ему пищу и вино, но не принял его, так как было оно отравлено. И испугались греки и сказали: «Это не Олег, но святой Дмитрий, посланный на нас Богом». И потребовал Олег выплатить дань на две тысячи кораблей: по двенадцать гривен на человека, а было в каждом корабле по сорок мужей…
        
        Цесари же Леон и Александр заключили мир с Олегом, обязались уплачивать дань и присягали друг другу: сами целовали крест, а Олега с мужами его водили присягать по закону русскому, и клялись те своим оружием и Перуном, своим богом, и Волосом, богом скота, и утвердили мир. И сказал Олег: «Сшейте для руси паруса из паволок, а славянам шелковые», и было так. И повесили щиты свои на вратах в знак победы, и пошел от Царьграда. И подняла русь паруса из паволок, а славяне шелковые, и разодрал их ветер. И сказали славяне: «Возьмем свои толстины, не даны, знать, славянам паруса шелковые». И вернулся Олег в Киев, неся золото и паволоки, и плоды, и вино, и всякое узорочье. И прозвали Олега Вещим, так как были люди язычниками и непросвещенными.`,
        images: [
            "https://sun9-34.userapi.com/impg/myCas-qRs-jouFQ8rGCLi-SFphMoulYAD3mv7A/b9hAC8nFhQ0.jpg?size=1024x768&quality=96&sign=510871ec9b315731f7c8213ff743d093&c_uniq_tag=MgyCS6qADRSBjrrCxxxnS776ReyjDRgn4-epjMSeAo4&type=album",
            "https://avatars.dzeninfra.ru/get-zen_doc/3966998/pub_609578be7ffcba2d9e3dc2cf_609578c1b8f34b04d20743f8/scale_1200",
            "https://www.hobobo.ru/assets/uploads/images/diafilmy/8-na-cargrad.jpg",
            "http://ursa-tm.ru/forum/uploads/monthly_2022_12/large.765150323_..jpg.cdfedaa786899e84417ea73776c0ef3c.jpg",
            "https://www.memotest.ru//ImageUpload/9023a938-6f8e-4c02-b870-f6a1e80f5105/28011.jpg",
            "https://topwar.ru/uploads/posts/2022-08/1660912986_1korabli-ro-suzu.jpg",
        ],
    },

    {
        label: ["Тестирование", "Testing"],
        questions: [
            {
                title: "Какой год был, когда князь Олег отправился на поход в Константинополь?",
                variants: ["907 год", "911 год", "941 год", "961 год"],
                explanation: `"В год 6415 (907). Пошел Олег на греков, оставив Игоря в
                Киеве"`,
                rightanswer: 0,
            },
            {
                title: "Какие народы были с Олегом?",
                variants: [
                    "Только варяги",
                    "Только славяне",
                    "Только греки",
                    "Все варианты верны",
                ],
                explanation: `"Взял же с собою множество варягов, и славян, и чуди,
                и кривичей, и мерю, и полян, и северян, и древлян, и
                радимичей, и хорватов, и дулебов, и тиверцев"`,
                rightanswer: 3,
            },
            {
                title: "Сколько было кораблей у Олега?",
                variants: ["200", "1000", "2000", "5000"],
                explanation: `"И с этими всеми пошел Олег на конях и в кораблях; и было кораблей числом две тысячи. И пришел к Царьграду; греки же замкнули Суд, а город затворили…"`,
                rightanswer: 2,
            },
            {
                title: "Что сделали воины Олега, чтобы двигаться к городу?",
                variants: [
                    "Налегли на весла",
                    "Установили колеса на кораблях",
                    "Пошли пешком",
                    "Использовали паровой двигатель",
                ],
                explanation: `"И повелел Олег своим воинам сделать колеса и поставить на колеса корабли. И когда поднялся попутный ветер, подняли они в поле паруса и двинулись к городу."`,
                rightanswer: 1,
            },
            {
                title: "Как прозвали Олега и почему?",
                variants: [
                    "Воином, за его боевые победы",
                    "Богатырем, за его богатство",
                    "Вещим, за его пророческие способности",
                    "Храбрым, за его отвагу на поле боя",
                ],
                explanation: `"И сказали славяне: «Возьмем свои толстины, не даны, знать, славянам паруса шелковые». И вернулся Олег в Киев, неся золото и паволоки, и плоды, и вино, и всякое узорочье. И прозвали Олега Вещим, так как были люди язычниками и непросвещенными."`,
                rightanswer: 2,
            },
        ],
    },
    {
        label: ["Комментарии", "Comments"],
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const content2 = [
    {
        label: ["Видео", "Video"],
        description: "https://youtu.be/dh0pAQXHgNo",
    },
    {
        label: ["Конспект", "Abstract"],
        description: `Не успела Москва забыть последствия соляного бунта, как в стране случился новый бунт, медный, на этот раз более массовый и кровавый. Причины медного бунта начали формировать еще в октябре 1653 года, когда царь Алексей Романов принял в состав Росси Украину, что привело страну к новой затяжной войне с Польшей. Начавшись в 1653 году, эта война продлилась вплоть до 1667 года. При этом в 1656-1658 году России пришлось также воевать со Швецией.

        Войны истощили казну страны, и царь со своими чиновниками искал новые возможности для пополнения казны. Одним из способов пополнения царской казны чиновники видели в чеканке новых денег. В 1654 году было дополнительно отчеканено серебряных монет на 1 миллион рублей. В тоже время были введены в оборот и медные деньги. Всего денег было отчеканено на 4 миллиона рублей. Эти действия, а вернее последствия этих действий, и создали главные причины медного бунта в Москве. Новые деньги в виду их огромного количества стали резко падать в цене. Если в 1660 года 1 серебряная монета стоила 1,5 медных монет, то уже в 1661 году за 1 серебряную монету давали 4 медных монет, в 1662 году уже 8 медных монет, а в 1663 году до 15 медных монет. Мелкие чиновники, которым выдавалось жалование новыми деньгами, армейские люди, а также торговцы отказывались принимать для расчетов такие монеты. В результате цены практически на все товары выросли в несколько раз. Кроме того, часто упоминаются случаи, когда деньги очень легко подделывали не только фальшивомонетчики, но и царские чиновники. Как утверждаю современники, инициатором ввода таких денег был боярин Милославский И.Д., который к тому же был главой правительства. Причины медного бунта, который навис над Россией, словно ком накладывались друг на друга.
        
        Начался медный бунт 25 июля 1662 года в 6 часов утра. В это время на Сретенке состоялся сбор людей, недовольных царскими чиновниками. Перед людьми выступил Кузьма Нагаев, который призывал людей подняться на восстание и выступить против произвола бояр и чиновников. После этого толпа отправилась к Красной площади. Буквально в течение часа восстание охватило весь город. Люди, которые считали причины медного бунта справедливыми, активно выступали против политики царя. Кроме того на сторону восставших перешли некоторые стрелецкие полки.
        
        С красной площади люди отправились в село Коломенское, где находился царь. Всего в село выдвинулось около 4-5 тысяч человек. К Коломенскому селу восставшие подошли в 9 часов утра. Царь со своей дружиной был застигнут врасплох. Царские войска не оказывали восставшим серьезное сопротивление, не смотря на то, что их численно составляла практически 1 тысячу человек. Люди, пробившись к царю, требовали выдачи отдельных бояр и их казни. Царю пришлось лично вступить в переговоры с людьми. Царь сумел убедить восставших в том, что неугодные им бояре будут выведены из состава правительства и им будет запрещено посещать Москву. Люди, поверив царю, отправились обратно в Москву.
        
        Одновременно с этим новая волна восставших отправилась из Москвы в Коломенское. Обе группы восставших встретились в 11 часов утра и вместе вновь отправились к царю. На этот раз их численность составляла 9-10 тысяч человек. Они вновь вступили в переговоры с царем, требуя выдачи неугодных им бояр. Царь Алексей Романов всячески затягивал переговоры. Делал это царь для того, чтобы к селу по его приказу успели перебросить действующую армию. Всего к Коломенскому прибыло порядка 10 тысяч стрельцов. По команде царя они вступили в бой против невооруженных восставших. Началась кровавая битва. Всего было убито около 1 тысячи восставших. Порядка 2 тысяч человек были ранены и арестованы. Царь жестко наказал восставших и на начальном этапе не сделал ничего, чтобы смягчить гнев народа. Только к середине 1663 года были отменены ненавистные людям медные деньги.`,
        images: [
            "https://yamoscow.ru/wp-content/uploads/2022/10/mednyj-bunt-v-Moskve-1238x850.jpg",
            "https://cdn.monetnik.ru/storage/market-lot/09/30/105909/311811_big.jpg",
            "https://worldofhistory.ru/wp-content/uploads/2021/02/tolpa-peredayuschaya-tsaryu-alekseyu-mihaylovichu-chelobitnuyu.jpg",
            "https://cdn.fishki.net/upload/post/2017/08/04/2351537/c424cea19915af83763fc7dc6968ba49.jpg",
        ],
    },

    {
        label: ["Тестирование", "Testing"],
        questions: [
            {
                title: "Какова была причина медного бунта?",
                variants: [
                    "Низкий уровень жизни",
                    "Вступление Украины в состав России",
                    "Нарушение прав налогоплательщиков",
                    "Слишком длительная война с Польшей",
                ],
                explanation: `"Причины медного бунта начали формировать еще в октябре 1653 года, когда царь Алексей Романов принял в состав России Украину"`,
                rightanswer: 1,
            },
            {
                title: "Какие последствия привели к медному бунту?",
                variants: [
                    "Ослабление царской власти в стране",
                    "Резкий рост цен на товары",
                    "Провал военных кампаний России",
                    "Недостаток серебряных монет",
                ],
                explanation: `"Мелкие чиновники, которым выдавалось жалование новыми деньгами, армейские люди, а также торговцы отказывались принимать для расчетов такие монеты. В результате цены практически на все товары выросли в несколько раз."`,
                rightanswer: 1,
            },
            {
                title: "Когда начался медный бунт?",
                variants: [
                    "25 июля 1662 года",
                    "25 июля 1661 года",
                    "26 июля 1662 года",
                    "24 июля 1662 года",
                ],
                explanation: `"Начался медный бунт 25 июля 1662 года в 6 часов утра. В это время на Сретенке состоялся сбор людей, недовольных царскими чиновниками."`,
                rightanswer: 0,
            },
            {
                title: "Кто был организатором бунта?",
                variants: [
                    "Милославский И.Д.",
                    "Царь Алексей Романов",
                    "Петр I",
                    "Кузьма Нагаев",
                ],
                explanation: `"Перед людьми выступил Кузьма Нагаев, который призывал людей подняться на восстание и выступить против произвола бояр и чиновников. После этого толпа отправилась к Красной площади."`,
                rightanswer: 3,
            },
            {
                title: "Когда были отменены медные деньги?",
                variants: [
                    "Середина 1662 года",
                    "Середина 1663 года",
                    "Начало 1663 года",
                    "Конец 1664 года",
                ],
                explanation: `"Царь жестко наказал восставших и на начальном этапе не сделал ничего, чтобы смягчить гнев народа. Только к середине 1663 года были отменены ненавистные людям медные деньги."`,
                rightanswer: 1,
            },
        ],
    },
    {
        label: ["Комментарии", "Comments"],
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const content3 = [
    {
        label: ["Видео", "Video"],
        description: "https://youtu.be/vwD4vemiK8A",
    },
    {
        label: ["Конспект", "Abstract"],
        description: `По совокупности данных исторических  источников крещение Руси  предстает как целенаправленный выбор кн. Владимира, обусловленный его личными религиозными исканиями и комплексом внутри- и внешнеполитических причин (неудовлетворённость языческими культами в качестве национально-консолидирующего фактора, необходимость вступления Древнерусского государства в число мировых  держав и др.). По свидетельству древнерусской традиции, Владимир и его дружина в конце 980-х гг. приняли решение о смене веры после длительного обсуждения и переговоров со странами, принадлежащими к разным вероисповеданиям. В летописи  сохранилось сказание об «испытании вер» кн. Владимиром. Оно  повествует о посольствах в Киев от мусульман из Волжской Булгарии, с латинского Запада, от иудаизированных хазар и из Византии, убеждавших князя принять их веру. Владимир отправил собственные посольства «в болгары», «в немцы», «в греки», чтобы «испытать их службу». После возвращения посольств он остановил свой выбор на христианстве византийского обряда, поразившего послов красотой богослужения. Решение принять христианство в его восточном, православном варианте из Константинополя было связано не только с этим, но и с желанием сохранить важные связи, установившиеся с Византией в предшествующие годы. Не меньшее значение имел престиж Византийской империи, находившейся в то время  в зените могущества. В отношении обстоятельств и времени крещения кн. Владимира в древнерусских источниках нет единства. Согласно «Корсунской легенде» – преданию, которое с рубежа XI–XII вв. вошло в древнерусское летописание, а затем и в Житие св. Владимира, князь принял крещение в захваченном им г. Корсунь, центре византийских  владений в Крыму, в 988 г. (однако фактически взятие Корсуни произошло, вероятнее всего, в 989 г.); там же состоялось бракосочетание Владимира с сестрой византийских  императоров Василия II Болгаробойцы и Константина VIII Анной. Существует и другая  традиция, зафиксированная также уже в XI в., которая приурочивает крещение Владимира к Киеву и ко времени за два года до взятия Корсуни. За крещением князя и его дружины последовало организованное государственной властью массовое крещение жителей крупнейших городов, прежде всего Киева и Новгорода. На первые годы после крещения (не позднее 997 г.) приходится учреждение в Древнерусском государстве митрополии с центром в Киеве, подчинённой Константинопольскому патриархату. Одновременно с митрополией в ней было учреждено не менее трех епархий: в Новгороде, в Белгороде Киевском, а также, вероятно, в Полоцке и/или Чернигове. Первыми епископами были греки. В соответствии с церковной традицией (закрепившейся не ранее XVI в.) первым митрополитом Киевским принято считать свт. Михаила, однако, византийские  источники дают основания предполагать, что первым митрополитом был Феофилакт, переведённый на Русь из Севастийской митрополии (северо-восток Малой Азии). С 990-х гг. на Руси разворачивается деревянное храмостроительство. Согласно «Похвале князю Владимиру» (1040-е гг.), написанной будущим митрополитом Иларионом, при Владимире возникли и первые монастыри. В 995–996 гг. в Киеве была освящена первая каменная Десятинная церковь, вероятно служившая княжеским дворцовым собором. С освящением этой церкви древнерусские  источники связывают меры государственно  власти по материальному обеспечению церковной организации: на её нужды должна была отчисляться десятая часть от совокупных княжеских доходов – десятина, которая собиралась при Десятинном храме. Следствием крещения Руси в законодательной области стало разделение по византийскому образцу княжеской и церковной (митрополичьей, епископской) юрисдикций, которое древнерусская. традиция также относит ко времени правления. Владимира Святославича. В сфере церковного права оказались брачно-семейные отношения, преступления против нравственности, суд над клириками и членами их семей и т. д. Все эти установления нашли отражение в княжеских уставах X-XII  вв. Важнейшей задачей стало обеспечение соборных и приходских храмов русскими  священнослужителями (для чего детей знати насильственно отбирали «на учение книжное»), а также богослужебными книгами. Принятие христианства имело значительные политические последствия. Оно способствовало усилению международного престижа Руси, дальнейшему укреплению и расширению уже традиционных связей с Византией, расширению контактов с южнославянским миром и странами Запада. Крещение Руси было важно и для социальной жизни древнерусского общества. Важнейший постулат христианства исходил из принципа божественной природы верховной власти. Постулат православия о «симфонии властей» превращал церковь в сильную опору власти, давая возможность духовного объединения всего государства и освящения всей системы общественных отношений. Принятие христианства способствовало быстрому укреплению государственных институтов. Крещение Руси вело к национальной консолидации и к развитию культуры. Оно содействовало развитию зодчества и живописи в средневековых её формах, проникновению византийской культуры как наследницы античной традиции. Особенно важным было распространение кириллической письменности и книжной традиции: именно после крещения Руси возникли первые памятники древнерусской письменной культуры.`,
        images: [
            "https://dailylenta.ru/site/uploads/posts/2018-11/1542180956_fmt_87_24_kreshcheniee.jpg",
            "https://images.squarespace-cdn.com/content/v1/54412118e4b03de3b6796773/1630747953212-OKHIJQYCVN9QPGG0YHXD/Nuremberg_chronicles_-_CONSTANTINOPEL.png",
            "https://russkiymir.ru/upload/iblock/b79/b794b90620e0fac5fc0c7fc4917936bf.jpg",
            "https://archlikbez.ru/wp-content/uploads/2018/11/0012.jpg",
            "https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-file-c6edbd64-8483-47b2-832d-92cf54a66a9b",
            "https://1.bp.blogspot.com/-LHDj_KxfDFo/YTIx_zGxXGI/AAAAAAAACzg/xIMl9rxuDeMd4vpiN8ou3KIMBWEMGqlZQCLcBGAsYHQ/s935/hello_html_bbf28a2.jpg",
        ],
    },

    {
        label: ["Тестирование", "Testing"],
        questions: [
            {
                title: "Какое религиозное обрядование Владимир выбрал после отправки своих посольств на испытание веры?",
                variants: [
                    "Иудаизм",
                    "Ислам",
                    "Христианство византийского обряда",
                    "Христианство западного обряда",
                ],
                explanation: `"Владимир отправил собственные посольства «в болгары», «в немцы», «в греки», чтобы «испытать их службу». После возвращения посольств он остановил свой выбор на христианстве византийского обряда, поразившего послов красотой богослужения."`,
                rightanswer: 2,
            },
            {
                title: "Какие факторы оказали влияние на решение Владимира принять христианство византийского обряда?",
                variants: [
                    "Желание избавиться от язычества",
                    "Желание присоединиться к христианскому союзу",
                    "Желание сохранить связи с Византией",
                    "Желание принять самую популярную религию в мире",
                ],
                explanation: `"Решение принять христианство в его восточном, православном варианте из Константинополя было связано не только с этим, но и с желанием сохранить важные связи, установившиеся с Византией в предшествующие годы. "`,
                rightanswer: 2,
            },
            {
                title: "Какие епархии были учреждены одновременно с митрополией в Древнерусском государстве?",
                variants: [
                    "Епархия в Москве, в Киеве и в Санкт-Петербурге",
                    "Епархия в Новгороде и в Белгороде Киевском",
                    "Епархия в Минске, в Харькове и в Львове",
                    "Епархия в Ростове-на-Дону, в Казани и в Самаре",
                ],
                explanation: `"Одновременно с митрополией в ней было учреждено не менее трех епархий: в Новгороде, в Белгороде Киевском, а также, вероятно, в Полоцке и/или Чернигове."`,
                rightanswer: 1,
            },
            {
                title: "Какое значение имело принятие христианства на Руси для ее политического статуса?",
                variants: [
                    "Никакого значения не имело",
                    "Оно ухудшило престиж Руси",
                    "Оно привело к усилению престижа Руси",
                    "Оно привело к уменьшению торговых связей Руси",
                ],
                explanation: `"Принятие христианства имело значительные политические последствия. Оно способствовало усилению международного престижа Руси, дальнейшему укреплению и расширению уже традиционных связей с Византией."`,
                rightanswer: 2,
            },
            {
                title: "Какое значение имел постулат православия о «симфонии властей» для социальной жизни древнерусского общества?",
                variants: [
                    "Приводил к разрыву между церковью и государством",
                    "Создавал дополнительные конфликты в обществе",
                    "Давал возможность духовного объединения Руси",
                    "Способствовал уменьшению влияния церкви",
                ],
                explanation: `"Постулат православия о «симфонии властей» превращал церковь в сильную опору власти, давая возможность духовного объединения всего государства."`,
                rightanswer: 2,
            },
        ],
    },
    {
        label: ["Комментарии", "Comments"],
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const englishText = `According to the totality of these historical sources, the baptism of Rus appears as a purposeful choice of the book. Vladimir, due to his personal religious pursuits and a complex of domestic and foreign policy reasons (dissatisfaction with pagan cults as a national consolidating factor, the need for the Old Russian state to join the world powers, etc.). According to the Old Russian tradition, Vladimir and his squad in the late 980s decided to change faith after a long discussion and negotiations with countries belonging to different faiths. The chronicle preserved the legend of the "test of the faith" of the book. Vladimir. It tells about embassies to Kiev from Muslims from Volga Bulgaria, from the Latin West, from Judaized Khazars and from Byzantium, who persuaded the prince to accept their faith. Vladimir sent his own embassies "to the Bulgarians", "to the Germans", "to the Greeks" to "test their service". After the return of the embassies, he chose the Christianity of the Byzantine rite, which struck the ambassadors with the beauty of the divine service. The decision to adopt Christianity in its eastern, Orthodox version from Constantinople was connected not only with this, but also with the desire to preserve the important ties established with Byzantium in previous years. No less important was the prestige of the Byzantine Empire, which was at the zenith of power at that time. With regard to the circumstances and time of the baptism of the book. Vladimir in the Old Russian sources there is no unity. According to the "Korsun Legend" – a legend that entered the Old Russian chronicle from the turn of the XI–XII centuries, and then into the Life of St. Vladimir, the prince was baptized in the city he captured. Korsun, the center of the Byzantine possessions in the Crimea, in 988 (however, the actual capture of Korsun took place, most likely, in 989); Vladimir's marriage with the sister of the Byzantine emperors Vasily II Bolgaroboitsa and Constantine VIII Anna took place there. There is another tradition, also recorded already in the XI century, which dates the baptism of Vladimir to Kiev and to the time two years before the capture of Korsun. The baptism of the prince and his retinue was followed by a mass baptism organized by the state authorities of residents of the largest cities, primarily Kiev and Novgorod. In the first years after baptism (no later than 997), the establishment of a metropolis in the Old Russian state with the center in Kiev, subordinate to the Patriarchate of Constantinople, falls. At the same time as the metropolis, at least three dioceses were established in it: in Novgorod, in Belgorod, Kiev, and also, probably, in Polotsk and/or Chernigov. The first bishops were Greeks. In accordance with the church tradition (which was fixed not earlier than the XVI century), the first Metropolitan of Kiev is considered to be svt. However, Byzantine sources suggest that the first metropolitan was Theophylact, who was transferred to Russia from the Metropolitanate of Sebaste (northeast Asia Minor). Since the 990s, wooden church-building has been unfolding in Russia. According to the "Praise of Prince Vladimir" (1040s), written by the future Metropolitan Hilarion, the first monasteries also appeared under Vladimir. In 995-996, the first stone Tithe Church was consecrated in Kiev, probably serving as a princely palace cathedral. With the consecration of this church, ancient Russian sources connect the measures of the state authorities for the material support of the church organization: a tenth of the total princely income was to be deducted for its needs – the tithe, which was collected at the Tithe Church. The result of the baptism of Russia in the legislative field was the separation of princely and ecclesiastical (metropolitan, episcopal) jurisdictions according to the Byzantine model, which is Old Russian. tradition also refers to the time of the reign. Vladimir Svyatoslavich. Marriage and family relations, crimes against morality, the trial of clerics and members of their families, etc. turned out to be in the sphere of church law. All these institutions were reflected in the princely charters of the X-XII centuries. The most important task was to provide cathedral and parish churches with Russian clergy (for which the children of the nobility were forcibly selected "for book learning"), as well as liturgical books. The adoption of Christianity had significant political consequences. It contributed to strengthening the international prestige of Russia, further strengthening and expanding the already traditional ties with Byzantium, expanding contacts with the South Slavic world and Western countries. The baptism of Rus was also important for the social life of ancient Russian society. The most important postulate of Christianity proceeded from the principle of the divine nature of the supreme power. Orthodoxy's postulate of a "symphony of authorities" turned the church into a strong pillar of power, enabling the spiritual unification of the entire state and the sanctification of the entire system of public relations. The adoption of Christianity contributed to the rapid strengthening of state institutions. The baptism of Russia led to national consolidation and to the development of culture. It contributed to the development of architecture and painting in its medieval forms, the penetration of Byzantine culture as the heiress of the ancient tradition. Especially important was the spread of Cyrillic writing and book tradition: it was after the baptism of Russia that the first monuments of ancient Russian written culture appeared.`;

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    minWidth: "200px",
    minHeight: "50px",
    borderRadius: "15px",
    borderColor: theme.palette.text.primary,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#66FF66" : "#66FF66",
    },
}));

const InformationBlockPage = (props) => {
    const { user, setUser } = React.useContext(Context);
    const [final, setFinal] = React.useState(false);
    const [update, setUpdate] = React.useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    content3[1].images[3] = localStorage.getItem("image")
        ? "https://cultvibe.ru/wp-content/uploads/2022/08/img13.jpg"
        : "https://archlikbez.ru/wp-content/uploads/2018/11/0012.jpg";
    const steps = id == "0" ? content1 : id == "8" ? content3 : content2;
    console.log(steps[0].label);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        setUpdate(true);
    }, [id]);

    const [progress, setProgress] = React.useState(0);
    const [activeStep, setActiveStep] = React.useState(0);

    const [key, setKey] = React.useState(0);

    const handleNext = () => {
        setProgress((p) => (p += 33.3));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setKey(key + 1);
    };
    const [alignment, setAlignment] = React.useState("rus");

    const handleChangeToggle = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const informationtext = textToArray(
        alignment == "rus" ? steps[1].description : englishText,
        id == "8" ? 125 : 170
    );

    let navigate = useNavigate();
    const handleClickNavigateCreate = () => {
        return navigate("/create");
    };

    return (
        <Container maxWidth="xl">
            <Fade>
                <Card
                    sx={{
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: "15px",
                        bgcolor: "primary.dark",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "10px",
                            bgcolor: "primary.dark",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "90%",
                            }}
                        >
                            <BorderLinearProgress
                                variant="determinate"
                                value={progress}
                                sx={{ height: "20px" }}
                            />
                        </Box>
                    </Box>
                    <CardContent
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: "10px",
                                mb: "10px",
                            }}
                        >
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleChangeToggle}
                                aria-label="Platform"
                            >
                                <ToggleButton
                                    value="rus"
                                    sx={{ fontSize: "20px" }}
                                >
                                    Русский
                                </ToggleButton>
                                <ToggleButton
                                    value="eng"
                                    sx={{ fontSize: "20px" }}
                                >
                                    English
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                        <Box
                            sx={{ textAlign: "center", mt: "30px", mb: "30px" }}
                        >
                            <Typography
                                component={"span"}
                                variant="h1"
                                color="text.primary"
                                sx={{
                                    marginBottom: "4px",
                                    fontSize: 40,
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    cursor: "default",
                                }}
                            >
                                {id == "0"
                                    ? "Поход Олега на Константинополь"
                                    : id == "8"
                                    ? "Крещение Руси"
                                    : alignment == "rus"
                                    ? "Медный бунт"
                                    : "Copper Riot"}
                            </Typography>
                            {user?.roles != "USER" ? (
                                <>
                                    <EditRoundedIcon
                                        onClick={handleClickNavigateCreate}
                                        sx={{ ml: "10px" }}
                                    ></EditRoundedIcon>
                                    <DeleteForeverRoundedIcon
                                        sx={{ ml: "10px" }}
                                    ></DeleteForeverRoundedIcon>
                                </>
                            ) : null}
                        </Box>

                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label[0]}>
                                    <StepLabel sx={{}}>
                                        <Typography
                                            color="white"
                                            sx={{ fontSize: 30 }}
                                        >
                                            {alignment == "rus"
                                                ? step.label[0]
                                                : step.label[1]}
                                        </Typography>
                                    </StepLabel>
                                    <StepContent>
                                        {(() => {
                                            switch (index) {
                                                case 0:
                                                    return (
                                                        <Box
                                                            sx={{
                                                                marginBottom:
                                                                    "30px",
                                                            }}
                                                        >
                                                            <ReactPlayer
                                                                url={
                                                                    steps[0]
                                                                        .description
                                                                }
                                                                controls="true"
                                                                width="1163px"
                                                                height="656px"
                                                            />
                                                        </Box>
                                                    );
                                                case 1:
                                                    return (
                                                        <Box
                                                            sx={{
                                                                flexGrow: 1,
                                                                bgcolor:
                                                                    "background.paper",
                                                                display: "flex",
                                                                justifyСontent:
                                                                    "center",
                                                                height: 600,
                                                                mb: "20px",
                                                            }}
                                                        >
                                                            <Tabs
                                                                orientation="vertical"
                                                                variant="scrollable"
                                                                indicatorColor="secondary"
                                                                textColor="inherit"
                                                                value={value}
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                aria-label="scrollable prevent tabs example"
                                                                sx={{
                                                                    borderRight: 1,
                                                                    borderColor:
                                                                        "divider",

                                                                    width: "200px",
                                                                    color: "white",
                                                                }}
                                                            >
                                                                {informationtext.map(
                                                                    (
                                                                        step,
                                                                        index
                                                                    ) => (
                                                                        <Tab
                                                                            key={
                                                                                step
                                                                            }
                                                                            label={`Часть ${
                                                                                index +
                                                                                1
                                                                            }`}
                                                                            {...a11yProps(
                                                                                index
                                                                            )}
                                                                        />
                                                                    )
                                                                )}
                                                            </Tabs>
                                                            <Fade key={key}>
                                                                {informationtext.map(
                                                                    (
                                                                        step,
                                                                        index
                                                                    ) => (
                                                                        <TabPanel
                                                                            key={
                                                                                step
                                                                            }
                                                                            value={
                                                                                value
                                                                            }
                                                                            index={
                                                                                index
                                                                            }
                                                                        >
                                                                            <Box
                                                                                sx={{
                                                                                    width: "1200px",
                                                                                    height: "0px",
                                                                                }}
                                                                            >
                                                                                {!(
                                                                                    index %
                                                                                    2
                                                                                ) ? (
                                                                                    <CardMedia
                                                                                        component="img"
                                                                                        height="245px"
                                                                                        image={
                                                                                            steps[1]
                                                                                                .images[
                                                                                                index
                                                                                            ]
                                                                                        }
                                                                                        alt="Paella dish"
                                                                                        sx={{
                                                                                            width: "400px",
                                                                                            float: "left",
                                                                                            margin: "8px 10px 2px 0px",
                                                                                        }}
                                                                                    />
                                                                                ) : (
                                                                                    <CardMedia
                                                                                        component="img"
                                                                                        height="245px"
                                                                                        image={
                                                                                            steps[1]
                                                                                                .images[
                                                                                                index
                                                                                            ]
                                                                                        }
                                                                                        alt="Paella dish"
                                                                                        sx={{
                                                                                            width: "400px",
                                                                                            float: "right",
                                                                                            margin: "8px 0px 2px 10px",
                                                                                        }}
                                                                                    />
                                                                                )}
                                                                            </Box>

                                                                            <Typography
                                                                                sx={{
                                                                                    fontSize: 25,
                                                                                    width: "1200px",
                                                                                    textAlign:
                                                                                        "justify",
                                                                                }}
                                                                            >
                                                                                {
                                                                                    step
                                                                                }
                                                                            </Typography>
                                                                        </TabPanel>
                                                                    )
                                                                )}
                                                            </Fade>
                                                        </Box>
                                                    );
                                                case 2:
                                                    return (
                                                        <>
                                                            <Box>
                                                                <Context.Provider
                                                                    value={{
                                                                        setFinal,
                                                                    }}
                                                                >
                                                                    <Quiz
                                                                        questions={
                                                                            steps[2]
                                                                                .questions
                                                                        }
                                                                    ></Quiz>
                                                                </Context.Provider>
                                                            </Box>
                                                        </>
                                                    );

                                                default:
                                                    return (
                                                        <Box
                                                            sx={{ mb: "20px" }}
                                                        >
                                                            <Grid
                                                                container
                                                                direction="row"
                                                                alignItems="center"
                                                                justifyContent="left"
                                                                gap={3}
                                                            >
                                                                <CommentAdd />
                                                            </Grid>
                                                        </Box>
                                                    );
                                            }
                                        })()}

                                        <Box
                                            sx={{
                                                mb: 2,
                                            }}
                                        >
                                            <div>
                                                <ColorButton
                                                    variant="outlined"
                                                    onClick={handleNext}
                                                    disabled={
                                                        !final && index === 2
                                                    }
                                                    sx={{ mr: 1, mb: 0 }}
                                                >
                                                    {index === steps.length - 1
                                                        ? "Следующий блок"
                                                        : alignment == "rus"
                                                        ? "Далее"
                                                        : "Next"}
                                                </ColorButton>
                                                <ColorButton
                                                    variant="outlined"
                                                    disabled={
                                                        index === 0 ||
                                                        (!final && index === 2)
                                                    }
                                                    onClick={handleBack}
                                                    sx={{ mr: 1 }}
                                                >
                                                    {alignment == "rus"
                                                        ? "Назад"
                                                        : "Back"}
                                                </ColorButton>
                                            </div>
                                        </Box>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </CardContent>
                </Card>
            </Fade>
        </Container>
    );
};

TabPanel.propTypes = {
    children: PropTypes.any,
    index: PropTypes.any,
    value: PropTypes.any,
};

InformationBlockPage.propTypes = {};

export default InformationBlockPage;
