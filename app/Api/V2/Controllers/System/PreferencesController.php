<?php

/*
 * PreferencesController.php
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

declare(strict_types=1);

namespace FireflyIII\Api\V2\Controllers\System;

use FireflyIII\Api\V2\Controllers\Controller;
use FireflyIII\Models\Preference;
use FireflyIII\Transformers\V2\PreferenceTransformer;
use Illuminate\Http\JsonResponse;

/**
 * Class PreferencesController
 */
class PreferencesController extends Controller
{

    /**
     * @param Preference $preference
     * @return JsonResponse
     */
    public function get(Preference $preference): JsonResponse
    {
        return response()
            ->json($this->jsonApiObject('preferences', $preference, new PreferenceTransformer))
            ->header('Content-Type', self::CONTENT_TYPE);
    }

}
