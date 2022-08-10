<?php
/**
 * SEOmatic plugin for Craft CMS 3.x
 *
 * @link      https://nystudio107.com/
 * @copyright Copyright (c) 2017 nystudio107
 * @license   https://nystudio107.com/license
 */

namespace nystudio107\retour\fields;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\base\PreviewableFieldInterface;
use craft\helpers\Json;
use nystudio107\retour\Retour as RetourPlugin;
use yii\db\Schema;

/**
 * @author    nystudio107
 * @package   Retour
 * @since     3.1.74
 *
 * @property-read string $contentColumnType
 */
class ShortLink extends Field implements PreviewableFieldInterface
{

    public string $redirectSrcMatch = 'pathonly';
    public int $redirectHttpCode = 301;

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('retour', 'Short Link');
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        $decoded = Json::decodeIfJson($value);

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'retour/_components/fields/ShortLink_input',
            [
                'name' => $this->handle,
                'value' => $value,
                'fieldName' => $this->handle
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml(): string
    {
        return Craft::$app->getView()->renderTemplate('retour/_components/fields/ShortLink_settings',
            [
                'field' => $this,
            ]);
    }

    /**
     * @inheritdoc
     */
    public function afterElementSave(ElementInterface $element, bool $isNew): void
    {
        if ($element->getIsDraft()) {
            return;
        }

        $value = $element->{$this->handle};
        RetourPlugin::$plugin->redirects->removeElementRedirect($element);
        if (!empty($value)) {
            RetourPlugin::$plugin->redirects->enableElementRedirect($element, $value, $this->redirectSrcMatch, $this->redirectHttpCode);
        }

        parent::afterElementSave($element, $isNew);
    }

    /**
     * @inheritdoc
     */
    public function afterElementDelete(ElementInterface $element): void
    {
        if ($element->getIsDraft()) {
            return;
        }

        RetourPlugin::$plugin->redirects->removeElementRedirect($element, true);
        parent::afterElementDelete($element);
    }

    /**
     * @inheritdoc
     */
    public function getTableAttributeHtml($value, ElementInterface $element): string
    {
        $decoded = Json::decodeIfJson($value);
        if ($decoded) {
            return $decoded['legacyUrl'] ?? '';
        }

        // Render the input template
        return $value;
    }
}
