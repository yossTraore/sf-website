import * as RadixAccordion from '@radix-ui/react-accordion'

export const Accordion = () => {
  return (
    <RadixAccordion.Root>
      <RadixAccordion.Item>
        <RadixAccordion.Header>
          <RadixAccordion.Trigger />
        </RadixAccordion.Header>
        <RadixAccordion.Content />
      </RadixAccordion.Item>
    </RadixAccordion.Root>
  )
}
