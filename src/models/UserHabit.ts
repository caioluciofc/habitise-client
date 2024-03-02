export interface UserHabit {
    id: number,
    name: string,
    emoji_unicode_hex: string
}

export interface TrackedHabit {
    id: number,
    habit: number,
    done_at: Date
}