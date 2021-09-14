export interface StepProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
    /**
     * Sets the step as active. Is passed to child components.
     */
    active?: boolean;
};