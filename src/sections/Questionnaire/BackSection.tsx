import ButtonComponent from "@/components/base/Button";
import { useTranslation } from "react-i18next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IQuestion } from "./interfaces";
import { getRouteById, routes } from "@/pages/routes";
import { useNavigate } from "react-router";

const BackSection = ({ id, showBackButton = true }: IQuestion) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(getRouteById(routes.QUESTIONNAIRE, parseInt(id) - 1));
  }

  return (
    <div style={{}}>
      <ButtonComponent
        startIcon={<ChevronLeftIcon sx={{scale: "2.68", marginRight: "16px"}}/>}
        label={t("questions.general.back")}
        variant={"text"}
        onClick={handleClick}
        sx={{
          marginBottom: '40px',
          visibility: showBackButton ? "visible" : "hidden",
          fontWeight: "600",
          fontSize: "18px !important",
          padding: "0",
          color: "#000000",
          background: "#FFFFFF",
          "&:hover": {
            background: "#FFFFFF",
            textDecoration: "underline",
          },
          "&:active": {
            background: "#FFFFFF",
            border: " 3px solid #000000",
            borderRadius: "8px",
            textDecoration: "none"
          },
        }}
      />
    </div>
  );
};

export default BackSection;
