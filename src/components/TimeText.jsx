/* eslint-disable react/prop-types */

export default function TimeText({ isOpen, formattedTime }) {
  return isOpen ? (
    <p>
      {formattedTime} We&#39;re currently open. Come visit us or Order online.
    </p>
  ) : (
    <p> We&#39;re currently closed. Visit us later.</p>
  );
}
