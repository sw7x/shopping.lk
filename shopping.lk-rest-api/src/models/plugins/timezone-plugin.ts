import { Schema } from 'mongoose';

// ── Types ────────────────────────────────────────────────

interface TimezonePluginOptions {
	timezone?: string;
	format?: 'datetime' | 'date' | 'time';
}

// ── Helper ───────────────────────────────────────────────

function formatToTimezone(date: Date, timezone: string, format: string): string {
	// Intl.DateTimeFormat is built into Node.js — no library needed
	const formatter = new Intl.DateTimeFormat('en-CA', {
		timeZone: timezone,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hourCycle: 'h23',
	});

	// parts gives us named pieces — much more reliable than string splitting
	const parts = Object.fromEntries(formatter.formatToParts(date).map(({ type, value }) => [type, value]));

	// parts looks like: { year: '2024', month: '07', day: '01', hour: '14', minute: '30', second: '00' }

	switch (format) {
		case 'date':
			return `${parts.year}-${parts.month}-${parts.day}`;
		case 'time':
			return `${parts.hour}:${parts.minute}:${parts.second}`;
		case 'datetime':
		default:
			return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
	}
}

// ── Plugin ───────────────────────────────────────────────

export function timezonePlugin(schema: Schema, options: TimezonePluginOptions = {}): void {
	const timezone = options.timezone ?? 'Asia/Colombo';
	const format = options.format ?? 'datetime';

	// ── createdAt ──────────────────────────────────────────

	schema.virtual('createdAtLocal').get(function (this: { createdAt?: Date }) {
		return this.createdAt ? formatToTimezone(this.createdAt, timezone, format) : null;
	});

	// ── updatedAt ──────────────────────────────────────────

	schema.virtual('updatedAtLocal').get(function (this: { updatedAt?: Date }) {
		return this.updatedAt ? formatToTimezone(this.updatedAt, timezone, format) : null;
	});

	// ── deletedAt (only if schema has this field) ──────────

	if (schema.path('deletedAt')) {
		schema.virtual('deletedAtLocal').get(function (this: { deletedAt?: Date | null }) {
			return this.deletedAt ? formatToTimezone(this.deletedAt, timezone, format) : null;
		});
	}

	// ── expose virtuals in .toJSON() and .toObject() ───────

	const opts = { virtuals: true };
	schema.set('toJSON', opts);
	schema.set('toObject', opts);
}
