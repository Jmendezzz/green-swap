import { VscReport } from 'react-icons/vsc';
import { Tooltip } from 'react-tooltip';
import styled from 'styled-components';

interface ReportProps {
  onClick?: () => void;
}

function Report({ onClick }: ReportProps) {
  return (
    <>
      <StyledReport id="report" onClick={onClick}>
        <VscReport size={40} />
      </StyledReport>
      <Tooltip
        place="top"
        anchorSelect="#report"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8))', zIndex: 999 }}
      >
        <p>Reportar usuario</p>
      </Tooltip>
    </>
  );
}
const StyledReport = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  color: #e32929;
  cursor: pointer;
  :hover {
    color: #ff0000;
  }
`;
export default Report;
