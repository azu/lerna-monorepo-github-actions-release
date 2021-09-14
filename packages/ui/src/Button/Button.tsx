 import styled from 'styled-components';

 const Button = styled.button`
   align-items: center;
   background-color: #0067e9;
   border-radius: 3px;
   border: 1px solid #0067e9;
   color: #ffffff;
   cursor: pointer;
   display: inline-flex;
   font-size: 0.875rem;
   font-weight: 400;
   height: 36px;
   justify-content: center;
   letter-spacing: 0;
   line-height: 24px;
   min-width: 4.6875rem;
   padding: 0 32px;
   transition: all 0.3s ease-out;
   &:hover {
     border: 1px solid #2269bf;
     background-color: #2269bf;
   }
   &:focus {
     outline: none;
   }
   &.left-icon {
     svg,
     i {
       margin-right: 8px;
       height: 0.875rem;
       width: auto;
     }
   }
   &:disabled {
     background-color: #cccccc;
     color: #888888;
     border-color: #c1c5c9;
     cursor: not-allowed;
     pointer-events: none;
   }
 `;

 export const SecondaryButton = styled(Button)`
   color: #0067e9;
   background-color: #ffffff;
   &:hover {
     background-color: #2269bf;
     color: #ffffff;
   }
 `;

 export const ErrorButton = styled(Button)`
   background-color: #e15554;
   border: 1px solid #e15554;
   &:hover {
     background-color: #de201f;
     border: 1px solid #de201f;
   }
 `;

 export const DisabledButton = styled(Button)`
   background-color: #949494;
   border: 1px solid #949494;
   &:hover {
     background-color: #6b6b6b;
     border: 1px solid #6b6b6b;
   }
 `;

 export const TextButton = styled(SecondaryButton)`
   border: none;
   background-color: white;
   padding: 0;
   &:hover {
     background-color: white;
     color: #2269bf;
     border: none;
   }
 `;

 export const UnstyledButton = styled.button`
   background: none;
   color: inherit;
   border: none;
   padding: 0;
   font: inherit;
   cursor: pointer;
   outline: inherit;
 `;

 export const DestructiveButton = styled(Button)`
   color: #cb1977;
   background-color: #ffffff;
   border: 1px solid #cb1977;
   &:hover {
     background-color: #cb1977;
     color: #ffffff;
   }
 `;

export default Button;