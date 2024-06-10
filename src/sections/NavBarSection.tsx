import NavBar from '@/components/composite/NavBar';
import useViewport from '@/helpers/useViewport';
import { routes } from '@/pages/routes';
import { useAppSelector } from '@/redux/hooks';
import { getActiveIndex } from '@/redux/Navbar/navbar';
import { currentQuestionNumber, isQuestion, totalQuestions } from '@/redux/Questionnaire/questionnaire';
import { useTranslation } from 'react-i18next';

const NavBarSection = () => {
  const { t } = useTranslation();

  const isQuestionToggle = useAppSelector(isQuestion);
  const currentQNumber = useAppSelector(currentQuestionNumber);
  const totalNumOfQuestions = useAppSelector(totalQuestions);
  const activeIndex = useAppSelector(getActiveIndex);

  const { width } = useViewport();

  const breakpoint = 920;

  const headerSectionValues = [
    {
      id: 1,
      title: t("pages.navbar.about"),
      route: routes.ABOUT
    },
    {
      id: 2,
      title: t("pages.navbar.socials"),
      route: routes.SOCIALS
    },
    {
      id: 3,
      title: t("pages.navbar.ideabox"),
      route: routes.IDEENBAK
    }
  ]

  return (
    <>
      <NavBar
        title={t("pages.navbar.title")}
        headerSectionValues={headerSectionValues}
        navbutton={t("pages.navbar.navButton")}
        question={t("pages.navbar.question")}
        isQuestion={isQuestionToggle}
        currentQNum={currentQNumber}
        totalQuestions={totalNumOfQuestions}
        activeIndex={activeIndex}
        showDrawer={(width > breakpoint) ? false : true}
       />
    </>
  );
};

export default NavBarSection;