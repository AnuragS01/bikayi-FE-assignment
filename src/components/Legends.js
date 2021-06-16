import React from "react";

function Legends() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      <div className="card" style={{ width: " 14rem" }}>
        <div className="card-body">
          <h5 className="card-title">MARIE CURIE</h5>
          <p className="card-text">
            Pierre Curie, and she shared the 1903 Nobel Prize in Physics with
            him and with the physicist Henri Becquerel. Marie won the 1911 Nobel
            Prize in Chemistry for her discovery of the elements polonium and
            radium, using techniques she invented for isolating radioactive
            isotopes.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: " 14rem" }}>
        <div className="card-body">
          <h5 className="card-title">LINUS PAULING</h5>
          <p className="card-text">
            Pauling was awarded the Nobel Prize in Chemistry in 1954. For his
            peace activism, he was awarded the Nobel Peace Prize in 1962..Of
            these, he is the only person to have been awarded two unshared Nobel
            Prizes,and one of two people to be awarded Nobel Prizes in different
            fields, the other being Marie Curie.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: " 14rem" }}>
        <div className="card-body">
          <h5 className="card-title">JOHN BARDEEN</h5>
          <p className="card-text">
            He won Nobel prize in 1956 with William Shockley and Walter Brattain
            for the invention of the transistor, and again in 1972 with Leon N
            Cooper and John Robert Schrieffer for a fundamental theory of
            conventional superconductivity known as the BCS theory.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: " 14rem" }}>
        <div className="card-body">
          <h5 className="card-title">FREDERICK SANGER</h5>
          <p className="card-text">
            In 1958, he was awarded a Nobel Prize in Chemistry "for his work on
            the structure of proteins, especially that of insulin". In 1980,
            Walter Gilbert and Sanger shared half of the chemistry prize "for
            their contributions concerning the determination of base sequences
            in nucleic acids".
          </p>
        </div>
      </div>
    </div>
  );
}

export default Legends;
