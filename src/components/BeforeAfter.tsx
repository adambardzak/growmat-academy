import React from "react";
import Image from "next/image";

type Props = {
  before: string;
  after: string;
  classname?: string;
};

function BeforeAfter({ before, after, classname }: Props) {
  return (
    <div className={classname}>
      <Image src={before} alt="Before" width={600} height={400} />
      <Image src={after} alt="After" width={600} height={400} />
    </div>
  );
}

export default BeforeAfter;
