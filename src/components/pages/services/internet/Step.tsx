import React from "react"

type StepsContents = {
  /** Heading for the step inserted underneath the step number */
  heading: string
  /** Paragraph text for the step inserted underneath the heading */
  paragraph: string
}

type Props = {
  stepsContent: StepsContents[]
}

const Step = ({ stepsContent }: Props) => {
  let steps = stepsContent.map((step, i) => (
    <div key={Math.random()} className="text-center p-5">
      <span className="inline-block border border-primary rounded-full text-primary text-5xl leading-relaxed text-center align-middle w-20 h-20 mb-5">
        {i + 1}
      </span>
      <h3 className="mb-3 text-white">{step.heading}</h3>
      <p className="text-white">{step.paragraph}</p>
    </div>
  ))
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {steps}
    </div>
  )
}

export default Step
