import { useTranslation } from 'react-i18next';
import Footer from '@/components/composite/Footer';

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <Footer
        text1={t('pages.footer.text1')}
        text2={t('pages.footer.text2')}
        text3={t('pages.footer.text3')}
      />
    </>
  );
};

export default FooterSection;