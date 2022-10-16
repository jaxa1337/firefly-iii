/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
    "config": {
        "html_language": "de",
        "month_and_day_fns": "d. MMMM Y"
    },
    "form": {
        "name": "Name",
        "amount_min": "Mindestbetrag",
        "amount_max": "H\u00f6chstbetrag",
        "url": "URL",
        "title": "Titel",
        "first_date": "Erstes Datum",
        "repetitions": "Wiederholungen",
        "description": "Beschreibung",
        "iban": "IBAN",
        "skip": "\u00dcberspringen",
        "date": "Datum"
    },
    "list": {
        "name": "Name",
        "account_number": "Kontonummer",
        "currentBalance": "Aktueller Kontostand",
        "lastActivity": "Letzte Aktivit\u00e4t",
        "active": "Aktiv?"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "Kostenrahmen",
        "subscriptions": "Abonnements",
        "transactions": "Buchungen",
        "title_expenses": "Ausgaben",
        "title_withdrawal": "Ausgaben",
        "title_revenue": "Einnahmen \/ Einkommen",
        "title_deposit": "Einnahmen \/ Einkommen",
        "title_transfer": "Umbuchungen",
        "title_transfers": "Umbuchungen",
        "asset_accounts": "Bestandskonten",
        "expense_accounts": "Ausgabekonten",
        "revenue_accounts": "Einnahmenkonten",
        "liabilities_accounts": "Verbindlichkeiten"
    },
    "firefly": {
        "actions": "Aktionen",
        "edit": "Bearbeiten",
        "delete": "L\u00f6schen",
        "reconcile": "Abgleichen",
        "create_new_asset": "Neues Bestandskonto erstellen",
        "confirm_action": "Aktion best\u00e4tigen",
        "new_budget": "Neues Budget",
        "new_asset_account": "Neues Bestandskonto",
        "newTransfer": "Neue Umbuchung",
        "newDeposit": "Neue Einnahme",
        "newWithdrawal": "Neue Ausgabe",
        "bills_paid": "Rechnungen bezahlt",
        "left_to_spend": "Verbleibend zum Ausgeben",
        "no_budget": "(kein Budget)",
        "budgeted": "Vorgesehen",
        "spent": "Ausgegeben",
        "no_bill": "(keine Belege)",
        "rule_trigger_source_account_starts_choice": "Name des Quellkontos beginnt mit..",
        "rule_trigger_source_account_ends_choice": "Quellkonto-Name endet mit..",
        "rule_trigger_source_account_is_choice": "Quellkonto-Name lautet..",
        "rule_trigger_source_account_contains_choice": "Quellkonto-Name enh\u00e4lt..",
        "rule_trigger_account_id_choice": "Beide Konto IDs sind exakt..",
        "rule_trigger_source_account_id_choice": "Quellkonto ID ist genau..",
        "rule_trigger_destination_account_id_choice": "Zielkonto ID ist genau..",
        "rule_trigger_account_is_cash_choice": "Beide Konten sind Bargeld",
        "rule_trigger_source_is_cash_choice": "Quellkonto ist (bar)",
        "rule_trigger_destination_is_cash_choice": "Zielkonto ist (bar)",
        "rule_trigger_source_account_nr_starts_choice": "Quellkontonummer\/IBAN beginnt mit..",
        "rule_trigger_source_account_nr_ends_choice": "Quellkontonummer\/IBAN endet auf..",
        "rule_trigger_source_account_nr_is_choice": "Quellkontonummer\/IBAN ist..",
        "rule_trigger_source_account_nr_contains_choice": "Quellkontonummer\/IBAN enth\u00e4lt..",
        "rule_trigger_destination_account_starts_choice": "Zielkonto-Name beginnt mit..",
        "rule_trigger_destination_account_ends_choice": "Zielkonto-Name endet auf..",
        "rule_trigger_destination_account_is_choice": "Zielkonto-Name ist..",
        "rule_trigger_destination_account_contains_choice": "Zielkonto-Name enth\u00e4lt..",
        "rule_trigger_destination_account_nr_starts_choice": "Zielkontonummer\/IBAN beginnt mit..",
        "rule_trigger_destination_account_nr_ends_choice": "Zielkontonummer\/IBAN endet auf..",
        "rule_trigger_destination_account_nr_is_choice": "Zielkontonummer\/IBAN ist..",
        "rule_trigger_destination_account_nr_contains_choice": "Zielkontonummer\/IBAN enth\u00e4lt..",
        "rule_trigger_transaction_type_choice": "Buchung ist vom Typ..",
        "rule_trigger_category_is_choice": "Kategorie ist..",
        "rule_trigger_amount_less_choice": "Betrag ist geringer als..",
        "rule_trigger_amount_is_choice": "Betrag ist..",
        "rule_trigger_amount_more_choice": "Betrag ist mehr als..",
        "rule_trigger_description_starts_choice": "Beschreibung beginnt mit..",
        "rule_trigger_description_ends_choice": "Beschreibung endet mit..",
        "rule_trigger_description_contains_choice": "Beschreibung enth\u00e4lt..",
        "rule_trigger_description_is_choice": "Beschreibung ist..",
        "rule_trigger_date_on_choice": "Buchungsdatum lautet..",
        "rule_trigger_date_before_choice": "Buchungsdatum ist vor \u2026",
        "rule_trigger_date_after_choice": "Buchungsdatum ist nach \u2026",
        "rule_trigger_created_at_on_choice": "Transaktion wurde gemacht am..",
        "rule_trigger_updated_at_on_choice": "Transaktion wurde zuletzt bearbeitet am..",
        "rule_trigger_budget_is_choice": "Budget ist..",
        "rule_trigger_tag_is_choice": "Irgendein Schlagwort lautet..",
        "rule_trigger_currency_is_choice": "Buchungsw\u00e4hrung ist \u2026",
        "rule_trigger_foreign_currency_is_choice": "Fremdw\u00e4hrung der Buchung ist \u2026",
        "rule_trigger_has_attachments_choice": "Hat mindestens so viele Anh\u00e4nge",
        "rule_trigger_has_no_category_choice": "Ohne Kategorie",
        "rule_trigger_has_any_category_choice": "Hat eine (beliebige) Kategorie",
        "rule_trigger_has_no_budget_choice": "Enth\u00e4lt kein Budget",
        "rule_trigger_has_any_budget_choice": "Enth\u00e4lt ein (beliebiges) Budget",
        "rule_trigger_has_no_bill_choice": "Keine Rechnung zugeordnet",
        "rule_trigger_has_any_bill_choice": "Hat eine (beliebige) Rechnung",
        "rule_trigger_has_no_tag_choice": "Enth\u00e4lt keine Schlagw\u00f6rter",
        "rule_trigger_has_any_tag_choice": "Enth\u00e4lt einen oder mehrere (beliebige) Schlagw\u00f6rter",
        "rule_trigger_any_notes_choice": "Hat (beliebige) Notizen",
        "rule_trigger_no_notes_choice": "Hat keine Notizen",
        "rule_trigger_notes_is_choice": "Notizen lauten..",
        "rule_trigger_notes_contains_choice": "Notizen beinhalten..",
        "rule_trigger_notes_starts_choice": "Notizen beginnen mit..",
        "rule_trigger_notes_ends_choice": "Notizen enden mit..",
        "rule_trigger_bill_is_choice": "Rechnung ist..",
        "rule_trigger_external_id_is_choice": "Externe ID ist..",
        "rule_trigger_internal_reference_is_choice": "Interne Referenz ist..",
        "rule_trigger_journal_id_choice": "Transaktions-Journal-ID ist..",
        "rule_trigger_any_external_url_choice": "Buchung hat eine externe URL",
        "rule_trigger_no_external_url_choice": "Buchung hat keine externe URL",
        "rule_trigger_id_choice": "Buchungskennung lautet \u2026",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "Bereinige jede Kategorie",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "Alle Budgets leeren",
        "rule_action_add_tag_choice": "Add tag ..",
        "rule_action_remove_tag_choice": "Remove tag ..",
        "rule_action_remove_all_tags_choice": "Alle Schlagw\u00f6rter entfernen",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "Alle Notizen entfernen",
        "rule_action_set_notes_choice": "Set notes to ..",
        "rule_action_link_to_bill_choice": "Link to a bill ..",
        "rule_action_convert_deposit_choice": "Buchung in eine Einzahlung umwandeln",
        "rule_action_convert_withdrawal_choice": "Buchung in eine Ausgabe umwandeln",
        "rule_action_convert_transfer_choice": "Buchung in eine Umbuchung umwandeln",
        "placeholder": "[Placeholder]",
        "recurrences": "Dauerauftr\u00e4ge",
        "title_expenses": "Ausgaben",
        "title_withdrawal": "Ausgaben",
        "title_revenue": "Einnahmen \/ Einkommen",
        "pref_1D": "Ein Tag",
        "pref_1W": "Eine Woche",
        "pref_1M": "Ein Monat",
        "pref_3M": "Drei Monate (Quartal)",
        "pref_6M": "Sechs Monate",
        "pref_1Y": "Ein Jahr",
        "repeat_freq_yearly": "J\u00e4hrlich",
        "repeat_freq_half-year": "halbj\u00e4hrlich",
        "repeat_freq_quarterly": "viertelj\u00e4hrlich",
        "repeat_freq_monthly": "monatlich",
        "repeat_freq_weekly": "w\u00f6chentlich",
        "single_split": "Teilen",
        "asset_accounts": "Bestandskonten",
        "expense_accounts": "Ausgabekonten",
        "liabilities_accounts": "Verbindlichkeiten",
        "undefined_accounts": "Konten",
        "name": "Name",
        "revenue_accounts": "Einnahmekonten",
        "description": "Beschreibung",
        "category": "Kategorie",
        "title_deposit": "Einnahmen \/ Einkommen",
        "title_transfer": "Umbuchungen",
        "title_transfers": "Umbuchungen",
        "piggyBanks": "Sparschweine",
        "rules": "Regeln",
        "accounts": "Konten",
        "categories": "Kategorien",
        "tags": "Schlagw\u00f6rter",
        "object_groups_page_title": "Gruppen",
        "reports": "Berichte",
        "webhooks": "Webhooks",
        "currencies": "W\u00e4hrungen",
        "administration": "Verwaltung",
        "profile": "Profil",
        "source_account": "Quellkonto",
        "destination_account": "Zielkonto",
        "amount": "Betrag",
        "date": "Datum",
        "time": "Uhrzeit",
        "preferences": "Einstellungen",
        "transactions": "Buchungen",
        "balance": "Kontostand",
        "budgets": "Budgets",
        "subscriptions": "Abonnements",
        "welcome_back": "\u00dcberblick",
        "bills_to_pay": "Unbezahlte Rechnungen",
        "net_worth": "Eigenkapital",
        "pref_last365": "Letztes Jahr",
        "pref_last90": "Letzte 90 Tage",
        "pref_last30": "Letzte 30\u00a0Tage",
        "pref_last7": "Letzte 7 Tage",
        "pref_YTD": "Jahr bis heute",
        "pref_QTD": "Quartal bis heute",
        "pref_MTD": "Monat bis heute"
    }
}
