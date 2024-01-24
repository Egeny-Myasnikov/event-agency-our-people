'use client'
import { TitleSection } from '@/app/components/UI/titleSection'
import s from './style.module.css'
import { ReviwesBlock } from '@/app/components/reviwesBlock'
import { useReviewsStore } from '@/app/store/reviewsStore'

export const ReviewsSection = () => {
    const listReviews = useReviewsStore((state) => state.listReviews)

    return (
        <section className={`${s.reviewsSection}`}>
            <TitleSection>Люди говорят</TitleSection>
            <ReviwesBlock list={listReviews} />
        </section>
    )
}